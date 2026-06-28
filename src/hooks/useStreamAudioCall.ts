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
  call: null;
  status: AudioCallStatus;
  isMuted: boolean;
  errorMessage: string | null;
  join: () => Promise<void>;
  leave: () => Promise<void>;
  toggleMute: () => Promise<void>;
}

export function useStreamAudioCall(_opts: UseStreamAudioCallOptions): UseStreamAudioCallResult {
  return {
    call: null,
    status: "joined",
    isMuted: false,
    errorMessage: null,
    join: async () => {},
    leave: async () => {},
    toggleMute: async () => {},
  };
}
