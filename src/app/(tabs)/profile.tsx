import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <Text className="h3 text-text-primary">Profile</Text>
      </View>
    </SafeAreaView>
  );
}
