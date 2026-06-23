import { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LANGUAGES } from "@/data/languages";
import type { Language } from "@/types/learning";
import { useLanguageStore } from "@/store/languageStore";

// Hardcoded learner counts for display (in millions)
const LEARNER_COUNTS: Record<string, string> = {
  es: "28.4M",
  fr: "19.4M",
  de: "8.1M",
  ja: "12.7M",
  it: "6.2M",
  pt: "9.1M",
  no: "2.3M",
  ko: "9.3M",
};

// Derive PNG flag URL from the SVG URL stored in language data
function getFlagUrl(flagSvgUrl: string): string {
  const code = flagSvgUrl.split("/").pop()?.replace(".svg", "") ?? "un";
  return `https://flagcdn.com/w80/${code}.png`;
}

function LanguageCard({
  language,
  selected,
  onPress,
}: {
  language: Language;
  selected: boolean;
  onPress: () => void;
}) {
  const learners = LEARNER_COUNTS[language.id] ?? "—";
  const flagUrl = getFlagUrl(language.flag);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginBottom: 8,
        borderWidth: selected ? 2 : 1,
        borderColor: selected ? "#6C4EF5" : "#E5E7EB",
        backgroundColor: selected ? "#F3F0FF" : "#FFFFFF",
      }}
    >
      {/* Flag */}
      <Image
        source={{ uri: flagUrl }}
        style={{ width: 44, height: 44, borderRadius: 22 }}
        resizeMode="cover"
      />

      {/* Name & learners */}
      <View style={{ flex: 1, marginLeft: 14 }}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 15,
            color: "#0D132B",
          }}
        >
          {language.name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 12,
            color: "#6B7280",
            marginTop: 1,
          }}
        >
          {learners} learners
        </Text>
      </View>

      {/* Checkmark or chevron */}
      {selected ? (
        <View
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            backgroundColor: "#6C4EF5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 15, fontFamily: "Poppins-Bold" }}>
            ✓
          </Text>
        </View>
      ) : (
        <Text style={{ color: "#9CA3AF", fontSize: 20 }}>›</Text>
      )}
    </TouchableOpacity>
  );
}

export default function LanguageSelectScreen() {
  const router = useRouter();
  const setSelectedLanguage = useLanguageStore((s) => s.setSelectedLanguage);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (l) =>
        l.name.toLowerCase().includes(q) || l.nativeName.toLowerCase().includes(q)
    );
  }, [search]);

  const selectedLanguage = LANGUAGES.find((l) => l.id === selectedId);

  function handleConfirm() {
    if (!selectedId) return;
    setSelectedLanguage(selectedId);
    router.replace("/");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ padding: 4, marginRight: 8 }}
          activeOpacity={0.7}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={{ fontSize: 22, color: "#0D132B" }}>‹</Text>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            fontSize: 17,
            color: "#0D132B",
            marginRight: 32,
          }}
        >
          Choose a language
        </Text>
      </View>

      {/* Search bar */}
      <View style={{ paddingHorizontal: 16, marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F6F7FB",
            borderRadius: 24,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: "#E5E7EB",
          }}
        >
          <Text style={{ fontSize: 16, color: "#9CA3AF", marginRight: 8 }}>⌕</Text>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search languages"
            placeholderTextColor="#9CA3AF"
            style={{
              flex: 1,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: "#0D132B",
            }}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Language list */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        ListHeaderComponent={
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 15,
              color: "#0D132B",
              marginBottom: 12,
            }}
          >
            Popular
          </Text>
        }
        renderItem={({ item }) => (
          <LanguageCard
            language={item}
            selected={item.id === selectedId}
            onPress={() => setSelectedId(item.id === selectedId ? null : item.id)}
          />
        )}
        ListFooterComponent={<View style={{ height: 160 }} />}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom: earth image + confirm button */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/earth.png")}
          style={{ width: "100%", height: 140, opacity: selectedId ? 0.6 : 1 }}
          resizeMode="cover"
        />

        {selectedId && (
          <View
            style={{
              position: "absolute",
              bottom: 20,
              left: 16,
              right: 16,
            }}
          >
            <TouchableOpacity
              onPress={handleConfirm}
              activeOpacity={0.85}
              style={{
                backgroundColor: "#6C4EF5",
                borderRadius: 18,
                paddingVertical: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Start learning {selectedLanguage?.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
