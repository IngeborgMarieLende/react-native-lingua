import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-6 px-6">
      <Text className="h2 text-lingua-purple">Lingua</Text>
      <Text className="text-body-md text-text-secondary text-center">
        The link to join the waitlist is down in the description
      </Text>
      <TouchableOpacity
        className="bg-lingua-purple rounded-2xl px-8 py-4"
        onPress={() => router.push("/onboarding")}
        activeOpacity={0.85}
      >
        <Text className="text-white font-poppins-semibold" style={{ fontSize: 16 }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}