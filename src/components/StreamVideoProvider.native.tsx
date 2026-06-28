import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-native-sdk";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

const STREAM_API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY!;

export function StreamVideoProvider({ children }: { children: React.ReactNode }) {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  const [client, setClient] = useState<StreamVideoClient | undefined>();

  useEffect(() => {
    if (!isLoaded || !user) {
      if (client) {
        client.disconnectUser().catch(console.error);
        setClient(undefined);
      }
      return;
    }

    const tokenProvider = async () => {
      const clerkToken = await getToken();
      const res = await fetch(
        `/api/stream-token?user_id=${encodeURIComponent(user.id)}`,
        { headers: { Authorization: `Bearer ${clerkToken}` } }
      );
      const data = await res.json();
      return data.token as string;
    };

    const c = StreamVideoClient.getOrCreateInstance({
      apiKey: STREAM_API_KEY,
      user: { id: user.id, name: user.fullName ?? user.id },
      tokenProvider,
    });
    setClient(c);

    return () => {
      c.disconnectUser().catch(console.error);
      setClient(undefined);
    };
  }, [user?.id, isLoaded]);

  if (!client) return <>{children}</>;

  return <StreamVideo client={client}>{children}</StreamVideo>;
}
