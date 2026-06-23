import "../../global.css";

import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

import { Stack, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/languageStore";

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
      <InitialLayout />
    </ClerkProvider>
  );
}
