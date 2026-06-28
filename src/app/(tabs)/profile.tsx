import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/languageStore";
import { getLanguageById } from "@/data/languages";
import { Colors } from "@/theme";

export default function ProfileScreen() {
  const router = useRouter();
  const { selectedLanguageId } = useLanguageStore();
  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <View className="px-5 pt-4 pb-3">
        <Text className="text-[22px] font-poppins-bold text-text-primary">Profile</Text>
      </View>

      <View className="px-5 mt-2">
        {/* Current language row */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push("/language-select")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 16,
            borderWidth: 1.5,
            borderColor: Colors.border,
            padding: 16,
            gap: 12,
          }}
        >
          {language ? (
            <Image
              source={{ uri: `https://flagcdn.com/w80/${language.flag.split("/").pop()?.replace(".svg", "")}.png` }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
              resizeMode="cover"
            />
          ) : (
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: Colors.surface, alignItems: "center", justifyContent: "center" }}>
              <Ionicons name="language-outline" size={22} color={Colors.textSecondary} />
            </View>
          )}

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, color: Colors.textSecondary, marginBottom: 2 }}>
              Learning language
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "700", color: Colors.textPrimary }}>
              {language?.name ?? "Not selected"}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={{ fontSize: 13, color: Colors.linguaPurple, fontWeight: "600" }}>
              Change
            </Text>
            <Ionicons name="chevron-forward" size={16} color={Colors.linguaPurple} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

