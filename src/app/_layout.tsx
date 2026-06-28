import "../../global.css";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import { Stack, useRouter, useSegments, usePathname, useGlobalSearchParams } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef } from "react";
import { useLanguageStore } from "@/store/languageStore";
import { PostHogProvider } from "posthog-react-native";
import { posthog } from "@/lib/posthog";
import { StreamVideoProvider } from "@/components/StreamVideoProvider";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
}

SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const { selectedLanguageId, _hasHydrated } = useLanguageStore();
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);

  // Manual screen tracking for Expo Router
  useEffect(() => {
    if (previousPathname.current !== pathname) {
      posthog.screen(pathname, {
        previous_screen: previousPathname.current ?? null,
        ...params,
      });
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

  useEffect(() => {
    if (!isLoaded || !_hasHydrated) return;

    const isPublicRoute = ["sign-in", "sign-up", "onboarding"].includes(
      segments[0] as string
    );
    const isLanguageSelect = segments[0] === "language-select";

    if (!isSignedIn && !isPublicRoute) {
      router.replace("/onboarding");
    } else if (isSignedIn && isPublicRoute) {
      if (!selectedLanguageId) {
        router.replace("/language-select");
      } else {
        router.replace("/(tabs)/home");
      }
    } else if (isSignedIn && !selectedLanguageId && !isLanguageSelect) {
      router.replace("/language-select");
    }
  }, [isSignedIn, isLoaded, segments, selectedLanguageId, _hasHydrated]);

  if (!isLoaded || !_hasHydrated) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <PostHogProvider
        client={posthog}
        autocapture={{
          captureScreens: true,
          captureTouches: true,
          propsToCapture: ["testID"],
          maxElementsCaptured: 20,
        }}
      >
        <StreamVideoProvider>
          <InitialLayout />
        </StreamVideoProvider>
      </PostHogProvider>
    </ClerkProvider>
  );
}
