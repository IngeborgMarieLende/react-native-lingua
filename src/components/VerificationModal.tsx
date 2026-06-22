import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
  onVerify: (code: string) => Promise<void>;
}

export function VerificationModal({
  visible,
  onClose,
  email,
  onVerify,
}: VerificationModalProps) {
  const [code, setCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      setCode("");
      setError("");
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [visible]);

  async function handleCodeChange(text: string) {
    const cleaned = text.replace(/\D/g, "").slice(0, 6);
    setCode(cleaned);
    setError("");
    if (cleaned.length === 6) {
      setIsLoading(true);
      try {
        await onVerify(cleaned);
      } catch (err: any) {
        setError(err?.errors?.[0]?.message ?? err?.message ?? "Incorrect code. Please try again.");
        setCode("");
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Backdrop */}
        <TouchableOpacity
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.45)" }}
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Sheet */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            paddingHorizontal: 24,
            paddingTop: 20,
            paddingBottom: Platform.OS === "ios" ? 44 : 28,
          }}
        >
          {/* Handle bar */}
          <View
            style={{
              width: 40,
              height: 4,
              backgroundColor: "#E5E7EB",
              borderRadius: 2,
              alignSelf: "center",
              marginBottom: 24,
            }}
          />

          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 22,
              color: "#0D132B",
              marginBottom: 6,
            }}
          >
            Check your email
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#6B7280",
              marginBottom: 32,
            }}
          >
            We sent a 6-digit code to{" "}
            <Text style={{ color: "#0D132B", fontFamily: "Poppins-Medium" }}>
              {email || "your email"}
            </Text>
          </Text>

          {/* Digit boxes — tap to focus the hidden input */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
            disabled={isLoading}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
                marginBottom: error ? 12 : 32,
              }}
            >
              {Array.from({ length: 6 }).map((_, i) => {
                const filled = i < code.length;
                const active = i === code.length && !isLoading;
                return (
                  <View
                    key={i}
                    style={{
                      width: 46,
                      height: 58,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: error
                        ? "#EF4444"
                        : filled || active
                        ? "#6C4EF5"
                        : "#E5E7EB",
                      backgroundColor: error
                        ? "#FEF2F2"
                        : filled
                        ? "#F3F0FF"
                        : "#FFFFFF",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {isLoading && i === 0 ? (
                      <ActivityIndicator size="small" color="#6C4EF5" />
                    ) : (
                      <Text
                        style={{
                          fontFamily: "Poppins-SemiBold",
                          fontSize: 24,
                          color: "#0D132B",
                        }}
                      >
                        {code[i] ?? ""}
                      </Text>
                    )}
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>

          {error ? (
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                fontSize: 13,
                color: "#EF4444",
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              {error}
            </Text>
          ) : null}

          {/* Hidden number-pad input */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            editable={!isLoading}
            style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
