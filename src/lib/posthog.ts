import PostHog from "posthog-react-native";

const apiKey = process.env.EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.EXPO_PUBLIC_POSTHOG_HOST;

const isPostHogConfigured = Boolean(
  apiKey && apiKey !== "phc_your_project_token_here"
);

if (!isPostHogConfigured) {
  console.warn(
    "PostHog project token not configured. Analytics disabled. " +
      "Set EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN in your .env file."
  );
}

export const posthog = new PostHog(apiKey || "placeholder_key", {
  host,
  disabled: !isPostHogConfigured,
  captureAppLifecycleEvents: true,
  flushAt: 20,
  flushInterval: 10000,
  maxBatchSize: 100,
  maxQueueSize: 1000,
  preloadFeatureFlags: true,
  sendFeatureFlagEvent: true,
  featureFlagsRequestTimeoutMs: 10000,
  requestTimeout: 10000,
  fetchRetryCount: 3,
  fetchRetryDelay: 3000,
});

if (__DEV__) {
  posthog.debug();
}
