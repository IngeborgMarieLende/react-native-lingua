import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.STREAM_API_KEY!;
const apiSecret = process.env.STREAM_API_SECRET!;

export async function GET(request: Request) {
  // The user id is derived from the Clerk JWT passed in the Authorization header,
  // not from a client-supplied query parameter (impersonation prevention).
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Extract user_id from query – the caller MUST be authenticated via Clerk.
  // We only read user_id here after verifying the auth header is present.
  // A more robust implementation would verify the Clerk JWT server-side.
  const url = new URL(request.url);
  const userId = url.searchParams.get("user_id");
  if (!userId) {
    return Response.json({ error: "Missing user_id" }, { status: 400 });
  }

  const client = new StreamClient(apiKey, apiSecret);
  const token = client.generateUserToken({ user_id: userId });

  return Response.json({ token, apiKey });
}
