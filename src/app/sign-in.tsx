import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import { usePostHog } from "posthog-react-native";
import { VerificationModal } from "../components/VerificationModal";

function SocialButton({
  label,
  icon,
  iconBgColor,
  iconTextColor,
}: {
  label: string;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 10,
      }}
      activeOpacity={0.8}
    >
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: iconBgColor,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 14,
        }}
      >
        <Text
          style={{
            color: iconTextColor,
            fontSize: 15,
            fontFamily: "Poppins-Bold",
          }}
        >
          {icon}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          fontFamily: "Poppins-Medium",
          color: "#0D132B",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function SignInScreen() {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const posthog = usePostHog();
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSignIn() {
    if (!isLoaded || !email) return;
    setError("");
    setIsSubmitting(true);
    try {
      await signIn.create({
        strategy: "email_code",
        identifier: email,
      });
      setShowModal(true);
    } catch (err: any) {
      const message = err?.errors?.[0]?.message ?? "Something went wrong. Please try again.";
      setError(message);
      posthog.capture("sign_in_failed", { error_message: message });
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleVerify(code: string) {
    if (!isLoaded) return;
    const result = await signIn.attemptFirstFactor({
      strategy: "email_code",
      code,
    });
    if (result.status === "complete") {
      await setActive({ session: result.createdSessionId });

      posthog.identify(email);
      posthog.capture("user_signed_in");

      setShowModal(false);
      router.replace("/");
    } else {
      throw new Error("Sign-in could not be completed.");
    }
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
      edges={["top", "bottom"]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Back button */}
          <TouchableOpacity
            style={{
              margin: 16,
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={{ fontSize: 28, color: "#0D132B", lineHeight: 32 }}>
              ‹
            </Text>
          </TouchableOpacity>

          <View style={{ paddingHorizontal: 24 }}>
            {/* Header */}
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 32,
                color: "#0D132B",
                lineHeight: 38,
              }}
            >
              Welcome back
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 14,
                color: "#6B7280",
                marginTop: 6,
              }}
            >
              Sign in to continue your journey ✨
            </Text>

            {/* Mascot */}
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <Image
                source={require("../../assets/images/mascot-auth.png")}
                style={{ width: 150, height: 150 }}
                resizeMode="contain"
              />
            </View>

            {/* Email input */}
            <View
              style={{
                borderWidth: 1,
                borderColor: "#E5E7EB",
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 12,
                marginBottom: 24,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                }}
              >
                Email
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
                placeholder="alex@gmail.com"
                placeholderTextColor="#9CA3AF"
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Regular",
                  color: "#0D132B",
                  marginTop: 2,
                }}
              />
            </View>

            {/* Sign In button */}
            <TouchableOpacity
              style={{
                backgroundColor: "#6C4EF5",
                borderRadius: 16,
                paddingVertical: 16,
                alignItems: "center",
                marginBottom: error ? 8 : 24,
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onPress={handleSignIn}
              activeOpacity={0.85}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 18,
                  }}
                >
                  Sign In
                </Text>
              )}
            </TouchableOpacity>

            {error ? (
              <Text
                style={{
                  fontSize: 13,
                  color: "#EF4444",
                  fontFamily: "Poppins-Regular",
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                {error}
              </Text>
            ) : null}

            {/* Divider */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 14,
                  marginHorizontal: 12,
                  fontFamily: "Poppins-Regular",
                }}
              >
                or continue with
              </Text>
              <View style={{ flex: 1, height: 1, backgroundColor: "#E5E7EB" }} />
            </View>

            {/* Social auth */}
            <SocialButton
              label="Continue with Google"
              icon="G"
              iconBgColor="#EEF2FF"
              iconTextColor="#4285F4"
            />
            <SocialButton
              label="Continue with Facebook"
              icon="f"
              iconBgColor="#EFF6FF"
              iconTextColor="#1877F2"
            />
            <SocialButton
              label="Continue with Apple"
              icon="A"
              iconBgColor="#F5F5F5"
              iconTextColor="#000000"
            />

            {/* Footer link */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  fontFamily: "Poppins-Regular",
                }}
              >
                Don't have an account?{" "}
              </Text>
              <TouchableOpacity
                onPress={() => router.replace("/sign-up")}
                activeOpacity={0.7}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#6C4EF5",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        email={email}
        onVerify={handleVerify}
      />
    </SafeAreaView>
  );
}
