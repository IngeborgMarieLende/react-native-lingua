import { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import {
  useStreamVideoClient,
  Call,
  CallingState,
} from "@stream-io/video-react-native-sdk";

export type AudioCallStatus =
  | "idle"
  | "connecting"
  | "joined"
  | "ended"
  | "error";

interface UseStreamAudioCallOptions {
  lessonId: string;
  languageId: string;
}

interface UseStreamAudioCallResult {
  call: Call | null;
  status: AudioCallStatus;
  isMuted: boolean;
  errorMessage: string | null;
  join: () => Promise<void>;
  leave: () => Promise<void>;
  toggleMute: () => Promise<void>;
}

export function useStreamAudioCall({
  lessonId,
  languageId,
}: UseStreamAudioCallOptions): UseStreamAudioCallResult {
  const { user } = useUser();
  const { getToken } = useAuth();
  const videoClient = useStreamVideoClient();

  const [call, setCall] = useState<Call | null>(null);
  const [status, setStatus] = useState<AudioCallStatus>("idle");
  const [isMuted, setIsMuted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Stable ref to avoid stale closures in cleanup
  const callRef = useRef<Call | null>(null);

  // Derive a deterministic call id from the lesson
  const callId = `lesson-${lessonId}`;

  // Sync the ref
  useEffect(() => {
    callRef.current = call;
  }, [call]);

  // Cleanup on unmount – guard against already-left calls
  useEffect(() => {
    return () => {
      const c = callRef.current;
      if (c && c.state.callingState !== CallingState.LEFT) {
        c.leave().catch(console.error);
      }
    };
  }, []);

  const join = async () => {
    if (!videoClient || !user) {
      setStatus("error");
      setErrorMessage("Stream client not ready. Please try again.");
      return;
    }

    try {
      setStatus("connecting");
      setErrorMessage(null);

      const clerkToken = await getToken();

      // Ask the API route to create/get the call server-side
      await fetch("/api/create-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clerkToken}`,
        },
        body: JSON.stringify({
          callId,
          lessonId,
          languageId,
          userId: user.id,
        }),
      });

      const c = videoClient.call("audio_room", callId, { reuseInstance: true });
      setCall(c);

      await c.join({ create: true });
      await c.microphone.enable();
      setIsMuted(false);
      setStatus("joined");
    } catch (err) {
      console.error("Stream join error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to join call."
      );
    }
  };

  const leave = async () => {
    const c = callRef.current;
    if (!c) return;
    try {
      if (c.state.callingState !== CallingState.LEFT) {
        await c.leave();
      }
    } catch (err) {
      console.error("Stream leave error:", err);
    } finally {
      setCall(null);
      setStatus("ended");
    }
  };

  const toggleMute = async () => {
    const c = callRef.current;
    if (!c) return;
    try {
      if (isMuted) {
        await c.microphone.enable();
        setIsMuted(false);
      } else {
        await c.microphone.disable();
        setIsMuted(true);
      }
    } catch (err) {
      console.error("Stream mute toggle error:", err);
    }
  };

  return { call, status, isMuted, errorMessage, join, leave, toggleMute };
}
