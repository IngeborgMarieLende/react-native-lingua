import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { usePostHog } from "posthog-react-native";
import { useLanguageStore } from "@/store/languageStore";
import { getLanguageById } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { Images } from "@/constants/images";
import { Colors } from "@/theme";

// ─── Static demo data (would come from a progress store in a real app) ───────
const DAILY_XP = 15;
const DAILY_GOAL_XP = 20;
const STREAK_COUNT = 12;

// Today's plan — first 3 lessons drawn from learning data
const TODAY_PLAN_ITEMS = [
  {
    id: "tp-1",
    title: "Lesson",
    subtitle: "At the café",
    icon: "book" as const,
    iconBg: Colors.linguaPurple,
    done: true,
  },
  {
    id: "tp-2",
    title: "AI Conversation",
    subtitle: "Talk about your day",
    icon: "headset" as const,
    iconBg: Colors.linguaBlue,
    done: false,
  },
  {
    id: "tp-3",
    title: "New words",
    subtitle: "10 words",
    icon: "chatbubble" as const,
    iconBg: Colors.error,
    done: false,
  },
];

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageId } = useLanguageStore();
  const posthog = usePostHog();

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const units = selectedLanguageId ? getUnitsByLanguage(selectedLanguageId) : [];
  const currentUnit = units[0];
  const levelLabel = "A1";

  const xpProgress = DAILY_XP / DAILY_GOAL_XP;
  const firstName = user?.firstName ?? "there";

  function handleContinueLesson() {
    posthog.capture("lesson_continued", {
      language_id: selectedLanguageId,
      unit_title: currentUnit?.title,
      level: levelLabel,
    });
  }

  function handleDailyPlanItemTap(item: typeof TODAY_PLAN_ITEMS[number]) {
    posthog.capture("daily_plan_item_tapped", {
      item_title: item.title,
      item_done: item.done,
    });
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <View className="flex-row items-center justify-between px-5 pt-4 pb-3">
          {/* Left: flag + greeting */}
          <View className="flex-row items-center gap-3">
            {language ? (
              <Image
                source={{ uri: language.flag }}
                style={{ width: 38, height: 38, borderRadius: 19 }}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: Colors.surface,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 20 }}>🌍</Text>
              </View>
            )}
            <Text
              style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, color: Colors.textPrimary }}
            >
              {language
                ? `Hola, ${firstName}! 👋`
                : `Hey, ${firstName}! 👋`}
            </Text>
          </View>

          {/* Right: streak + bell */}
          <View className="flex-row items-center gap-4">
            <View className="flex-row items-center gap-1">
              <Image
                source={Images.streakFire}
                style={{ width: 22, height: 22 }}
                resizeMode="contain"
              />
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 15,
                  color: Colors.streak,
                }}
              >
                {STREAK_COUNT}
              </Text>
            </View>
            <Pressable hitSlop={8}>
              <Ionicons name="notifications-outline" size={24} color={Colors.textPrimary} />
            </Pressable>
          </View>
        </View>

        <View className="px-5 gap-4">
          {/* ── Daily Goal Card ──────────────────────────────────────────── */}
          <View
            style={{
              backgroundColor: "#FFF5EA",
              borderRadius: 20,
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, marginRight: 16 }}>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                  color: Colors.textSecondary,
                  marginBottom: 2,
                }}
              >
                Daily goal
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 28,
                  color: Colors.textPrimary,
                  lineHeight: 34,
                }}
              >
                {DAILY_XP}{" "}
                <Text
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: 16,
                    color: Colors.textSecondary,
                  }}
                >
                  / {DAILY_GOAL_XP} XP
                </Text>
              </Text>

              {/* Progress bar */}
              <View
                style={{
                  height: 8,
                  backgroundColor: "#FFDBB5",
                  borderRadius: 4,
                  marginTop: 10,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: 8,
                    width: `${xpProgress * 100}%`,
                    backgroundColor: Colors.streak,
                    borderRadius: 4,
                  }}
                />
              </View>
            </View>

            <Image
              source={Images.treasure}
              style={{ width: 72, height: 72 }}
              resizeMode="contain"
            />
          </View>

          {/* ── Continue Learning Card ───────────────────────────────────── */}
          {language && currentUnit ? (
            <View
              style={{
                borderRadius: 20,
                overflow: "hidden",
                height: 160,
                backgroundColor: Colors.linguaPurple,
                experimental_backgroundImage:
                  "linear-gradient(135deg, #6C4EF5 0%, #4D8BFF 100%)",
              } as any}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 22,
                  paddingVertical: 20,
                }}
              >
                {/* Text + button */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: 2,
                    }}
                  >
                    Continue learning
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-Bold",
                      fontSize: 26,
                      color: "#fff",
                      lineHeight: 32,
                    }}
                  >
                    {language.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.75)",
                      marginBottom: 14,
                    }}
                  >
                    {levelLabel} • {currentUnit.title}
                  </Text>
                  <TouchableOpacity
                    style={{
                      alignSelf: "flex-start",
                      backgroundColor: "#fff",
                      borderRadius: 24,
                      paddingHorizontal: 20,
                      paddingVertical: 8,
                    }}
                    activeOpacity={0.8}
                    onPress={handleContinueLesson}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 14,
                        color: Colors.linguaPurple,
                      }}
                    >
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Palace image */}
                <Image
                  source={Images.palace}
                  style={{
                    width: 110,
                    height: 130,
                    marginRight: -10,
                  }}
                  resizeMode="contain"
                />
              </View>
            </View>
          ) : null}

          {/* ── Today's Plan ─────────────────────────────────────────────── */}
          <View>
            <View className="flex-row items-center justify-between mb-3">
              <Text
                style={{
                  fontFamily: "Poppins-SemiBold",
                  fontSize: 17,
                  color: Colors.textPrimary,
                }}
              >
                Today's plan
              </Text>
              <TouchableOpacity activeOpacity={0.7}>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 14,
                    color: Colors.linguaPurple,
                  }}
                >
                  View all
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                borderWidth: 1,
                borderColor: Colors.border,
                overflow: "hidden",
              }}
            >
              {TODAY_PLAN_ITEMS.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.7}
                  onPress={() => handleDailyPlanItemTap(item)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderBottomWidth: index < TODAY_PLAN_ITEMS.length - 1 ? 1 : 0,
                    borderBottomColor: Colors.border,
                  }}
                >
                  {/* Icon */}
                  <View
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: item.iconBg,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 14,
                    }}
                  >
                    <Ionicons name={item.icon} size={20} color="#fff" />
                  </View>

                  {/* Text */}
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: "Poppins-SemiBold",
                        fontSize: 15,
                        color: Colors.textPrimary,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Poppins-Regular",
                        fontSize: 13,
                        color: Colors.textSecondary,
                      }}
                    >
                      {item.subtitle}
                    </Text>
                  </View>

                  {/* Completion indicator */}
                  {item.done ? (
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: Colors.linguaPurple,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name="checkmark" size={16} color="#fff" />
                    </View>
                  ) : (
                    <View
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 14,
                        borderWidth: 2,
                        borderColor: Colors.border,
                      }}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
