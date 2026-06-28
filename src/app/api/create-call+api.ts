import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.STREAM_API_KEY!;
const apiSecret = process.env.STREAM_API_SECRET!;

// POST /api/create-call
// Body: { callId: string; lessonId: string; languageId: string; userId: string }
// Header: Authorization: Bearer <clerk-token>
export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  if (!body?.callId || !body?.userId) {
    return Response.json({ error: "Missing callId or userId" }, { status: 400 });
  }

  const { callId, lessonId, languageId, userId } = body as {
    callId: string;
    lessonId: string;
    languageId: string;
    userId: string;
  };

  const client = new StreamClient(apiKey, apiSecret);

  // Upsert the user so they can join the call
  await client.upsertUsers([
    {
      id: userId,
      name: userId,
      role: "user",
    },
  ]);

  // Get or create the audio call
  const call = client.video.call("audio_room", callId);
  await call.getOrCreate({
    data: {
      created_by_id: userId,
      members: [{ user_id: userId, role: "host" }],
      custom: {
        lessonId,
        languageId,
      },
      settings_override: {
        audio: {
          default_device: "speaker",
          noise_cancellation: { mode: "disabled" },
        },
        video: {
          enabled: false,
        },
      },
    },
  });

  return Response.json({ callId, callType: "audio_room" });
}
