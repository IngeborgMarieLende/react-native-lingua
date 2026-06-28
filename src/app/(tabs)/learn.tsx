import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/languageStore";
import { getLanguageById } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { Colors } from "@/theme";

// Mock progress: how many lessons completed per unit (keyed by unit id)
const MOCK_PROGRESS: Record<string, number> = {
  "es-unit-1": 2,
  "es-unit-2": 0,
  "fr-unit-1": 3,
  "fr-unit-2": 0,
};

export default function LearnScreen() {
  const router = useRouter();
  const { selectedLanguageId } = useLanguageStore();
  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const units = selectedLanguageId ? getUnitsByLanguage(selectedLanguageId) : [];

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      {/* Header */}
      <View className="px-5 pt-4 pb-3">
        <Text className="text-[22px] font-poppins-bold text-text-primary">
          {language ? `${language.name} Units` : "Learn"}
        </Text>
        <Text className="text-body-md text-text-secondary mt-0.5">
          {units.length} unit{units.length !== 1 ? "s" : ""} available
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32, gap: 16 }}
        showsVerticalScrollIndicator={false}
      >
        {units.map((unit, index) => {
          const completed = MOCK_PROGRESS[unit.id] ?? 0;
          const total = unit.lessons.length;
          const progress = total > 0 ? completed / total : 0;
          const isStarted = completed > 0;

          return (
            <TouchableOpacity
              key={unit.id}
              activeOpacity={0.85}
              onPress={() => router.push(`/lesson/${unit.id}`)}
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.07,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              {/* Hero image */}
              <Image
                source={{ uri: unit.imageUrl ?? `https://picsum.photos/seed/${unit.id}/800/300` }}
                style={{ width: "100%", height: 140 }}
                resizeMode="cover"
              />

              <View className="p-4">
                {/* Unit label */}
                <Text className="text-caption text-text-secondary font-poppins-medium uppercase tracking-widest mb-1">
                  Unit {index + 1}
                </Text>

                {/* Title & description */}
                <Text className="text-[17px] font-poppins-bold text-text-primary leading-snug">
                  {unit.title}
                </Text>
                <Text className="text-body-sm text-text-secondary mt-0.5 mb-3">
                  {unit.description}
                </Text>

                {/* Progress bar */}
                <View className="bg-surface rounded-full h-2 mb-2 overflow-hidden">
                  <View
                    className="h-2 rounded-full bg-lingua-purple"
                    style={{ width: `${progress * 100}%` }}
                  />
                </View>

                {/* Progress label + chevron */}
                <View className="flex-row items-center justify-between">
                  <Text className="text-body-sm text-text-secondary">
                    {isStarted ? `${completed} / ${total} lessons` : `${total} lessons`}
                  </Text>
                  <View className="flex-row items-center gap-1">
                    <Text
                      className="text-body-sm font-poppins-medium"
                      style={{ color: Colors.linguaPurple }}
                    >
                      {isStarted ? "Continue" : "Start"}
                    </Text>
                    <Ionicons name="chevron-forward" size={14} color={Colors.linguaPurple} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {units.length === 0 && (
          <View className="flex-1 items-center justify-center py-20">
            <Ionicons name="book-outline" size={48} color={Colors.textSecondary} />
            <Text className="text-body-md text-text-secondary mt-3 text-center">
              No units available.{"\n"}Select a language first.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

