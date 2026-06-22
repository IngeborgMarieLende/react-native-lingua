import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top", "bottom"]}>
      <View className="flex-1 justify-between">
        {/* Header */}
        <View className="px-6 pt-8">
          <View className="flex-row items-center justify-center gap-3 mb-10">
            <Image
              source={require("../../assets/images/moscot-logo.png")}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
            <Text className="h2">lingua</Text>
          </View>

          {/* Headline */}
          <Text className="h1">
            Your AI language{" "}
            <Text className="text-lingua-purple">teacher</Text>
            {"."}
          </Text>

          {/* Subtitle */}
          <Text className="text-body-md text-text-secondary mt-3">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot + speech bubbles */}
        <View style={{ height: 300 }} className="items-center relative">
          {/* Hello! bubble */}
          <View
            className="absolute rounded-2xl px-4 py-2 z-10 bg-white border border-border"
            style={{ left: 20, top: 130, elevation: 3, shadowColor: "#000", shadowOpacity: 0.06, shadowRadius: 6, shadowOffset: { width: 0, height: 2 } }}
          >
            <Text className="font-poppins-medium text-text-primary" style={{ fontSize: 15 }}>
              Hello!
            </Text>
          </View>

          {/* ¡Hola! bubble */}
          <View
            className="absolute rounded-2xl px-4 py-2 z-10"
            style={{ right: 20, top: 10, backgroundColor: "#EEF2FF" }}
          >
            <Text className="font-poppins-medium text-lingua-blue" style={{ fontSize: 15 }}>
              ¡Hola!
            </Text>
          </View>

          {/* 你好! bubble */}
          <View
            className="absolute rounded-2xl px-4 py-2 z-10"
            style={{ right: 20, top: 130, backgroundColor: "#FFF0F0" }}
          >
            <Text className="font-poppins-medium" style={{ fontSize: 15, color: "#EF4444" }}>
              你好!
            </Text>
          </View>

          {/* Mascot */}
          <Image
            source={require("../../assets/images/mascot-welcome.png")}
            style={{ width: 260, height: 260 }}
            resizeMode="contain"
          />
        </View>

        {/* Get Started button */}
        <View className="px-6 pb-6">
          <TouchableOpacity
            className="bg-lingua-purple rounded-2xl py-4 flex-row items-center justify-center"
            onPress={() => router.push("/sign-up")}
            activeOpacity={0.85}
          >
            <Text className="text-white font-poppins-semibold" style={{ fontSize: 18 }}>
              Get Started
            </Text>
            <Text className="text-white ml-3" style={{ fontSize: 20 }}>
              ›
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
