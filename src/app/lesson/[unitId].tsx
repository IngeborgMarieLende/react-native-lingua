import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { getUnitById } from "@/data/units";
import { Colors } from "@/theme";
import { Images } from "@/constants/images";
import type { Lesson } from "@/types/learning";

type LessonStatus = "completed" | "in-progress" | "not-started";
type ActiveTab = "lessons" | "practice";

function getInitialStatuses(lessons: Lesson[]): Record<string, LessonStatus> {
  const result: Record<string, LessonStatus> = {};
  lessons.forEach((lesson, index) => {
    if (index < 2) result[lesson.id] = "completed";
    else if (index === 2) result[lesson.id] = "in-progress";
    else result[lesson.id] = "not-started";
  });
  return result;
}

function progressCount(statuses: Record<string, LessonStatus>): number {
  return Object.values(statuses).filter((s) => s === "completed" || s === "in-progress").length;
}

function LessonStatusIcon({ status }: Readonly<{ status: LessonStatus }>) {
  if (status === "completed") {
    return (
      <View style={[styles.iconCircle, { backgroundColor: Colors.success }]}>
        <Ionicons name="checkmark" size={20} color="#fff" />
      </View>
    );
  }
  if (status === "in-progress") {
    return (
      <Image source={Images.mascotLogo} style={styles.inProgressIcon} resizeMode="contain" />
    );
  }
  return (
    <View style={styles.lockCircle}>
      <Ionicons name="lock-closed-outline" size={18} color={Colors.textSecondary} />
    </View>
  );
}

function LessonCard({
  lesson,
  index,
  status,
  onPress,
}: Readonly<{
  lesson: Lesson;
  index: number;
  status: LessonStatus;
  onPress: () => void;
}>) {
  const isCompleted = status === "completed";
  const isInProgress = status === "in-progress";
  const isNotStarted = status === "not-started";
  const targetCount = lesson.goal.targetCount;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.card, isInProgress && styles.cardInProgress]}
    >
      <View style={{ flex: 1, gap: 2 }}>
        <Text style={[styles.lessonLabel, isInProgress && { color: Colors.linguaPurple }]}>
          Lesson {index + 1}
        </Text>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        {isCompleted && (
          <Text style={styles.completedLabel}>
            {targetCount} / {targetCount} lessons
          </Text>
        )}
        {isInProgress && <Text style={styles.inProgressLabel}>In progress</Text>}
        {isNotStarted && (
          <Text style={styles.notStartedLabel}>0 / {targetCount} lessons</Text>
        )}
      </View>
      <LessonStatusIcon status={status} />
    </TouchableOpacity>
  );
}

export default function LessonScreen() {
  const { unitId } = useLocalSearchParams<{ unitId: string }>();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const unit = getUnitById(unitId);
  const [statuses] = useState<Record<string, LessonStatus>>(
    () => getInitialStatuses(unit?.lessons ?? [])
  );
  const [activeTab, setActiveTab] = useState<ActiveTab>("lessons");

  if (!unit) {
    return (
      <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: Colors.background }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: Colors.textSecondary }}>Unit not found.</Text>
          <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
            <Text style={{ color: Colors.linguaPurple }}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const done = progressCount(statuses);
  const total = unit.lessons.length;

  function handleLessonPress(lesson: Lesson) {
    router.push(`/lesson/audio/${lesson.id}`);
  }

  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} hitSlop={8}>
          <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {unit.title}
          </Text>
          <Text style={styles.headerSubtitle}>
            Unit {unit.level} • {done} / {total} lessons
          </Text>
        </View>
        <TouchableOpacity hitSlop={8}>
          <Ionicons name="bookmark" size={22} color={Colors.linguaPurple} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 48 }}>
        <View style={[styles.hero, { width }]}>
          <Image source={Images.palace} style={styles.palaceImage} resizeMode="contain" />
          <Image source={Images.mascotWelcome} style={styles.mascotImage} resizeMode="contain" />
        </View>

        <View style={styles.tabCard}>
          {(["lessons", "practice"] as ActiveTab[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tabBtn, isActive && styles.tabBtnActive]}
                onPress={() => setActiveTab(tab)}
                activeOpacity={0.8}
              >
                <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Text>
                {isActive && <View style={styles.tabUnderline} />}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.listWrapper}>
          {activeTab === "lessons" ? (
            unit.lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={index}
                status={statuses[lesson.id] ?? "not-started"}
                onPress={() => handleLessonPress(lesson)}
              />
            ))
          ) : (
            <View style={styles.practiceEmpty}>
              <Ionicons name="barbell-outline" size={48} color={Colors.textSecondary} />
              <Text style={styles.practiceEmptyText}>Practice coming soon!</Text>
              <Text style={styles.practiceEmptySub}>
                Complete lessons first to unlock practice exercises.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const HERO_HEIGHT = 220;

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingTop: 4, paddingBottom: 8 },
  backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center" },
  headerTitle: { fontSize: 20, fontWeight: "700", color: Colors.textPrimary },
  headerSubtitle: { fontSize: 13, color: Colors.textSecondary, marginTop: 1 },
  hero: { height: HERO_HEIGHT, backgroundColor: "#C8E8FF", overflow: "hidden" },
  palaceImage: { position: "absolute", right: -10, bottom: 0, width: "60%", height: HERO_HEIGHT * 0.95 },
  mascotImage: { position: "absolute", left: -8, bottom: -10, width: "52%", height: HERO_HEIGHT * 1.05, zIndex: 2 },
  tabCard: { flexDirection: "row", marginHorizontal: 16, marginTop: -1, backgroundColor: "#F1F0F5", borderRadius: 14, padding: 5, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 6, elevation: 3 },
  tabBtn: { flex: 1, alignItems: "center", paddingVertical: 10, borderRadius: 10, position: "relative" },
  tabBtnActive: { backgroundColor: "#fff", shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 3, elevation: 2 },
  tabLabel: { fontSize: 15, fontWeight: "500", color: Colors.textSecondary },
  tabLabelActive: { color: Colors.linguaPurple, fontWeight: "700" },
  tabUnderline: { position: "absolute", bottom: 4, left: "25%", right: "25%", height: 2.5, borderRadius: 2, backgroundColor: Colors.linguaPurple },
  listWrapper: { paddingHorizontal: 16, paddingTop: 14, gap: 10 },
  card: { flexDirection: "row", alignItems: "center", backgroundColor: "#fff", borderRadius: 14, borderWidth: 1, borderColor: Colors.border, paddingVertical: 14, paddingHorizontal: 16, gap: 12 },
  cardInProgress: { borderWidth: 2, borderColor: Colors.linguaPurple, backgroundColor: "#F5F2FF" },
  lessonLabel: { fontSize: 12, fontWeight: "600", color: Colors.textSecondary },
  lessonTitle: { fontSize: 16, fontWeight: "700", color: Colors.textPrimary },
  completedLabel: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  inProgressLabel: { fontSize: 13, color: Colors.linguaPurple, fontWeight: "600", marginTop: 2 },
  notStartedLabel: { fontSize: 12, color: Colors.textSecondary, marginTop: 2 },
  iconCircle: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center" },
  lockCircle: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center", borderWidth: 1.5, borderColor: Colors.border, backgroundColor: "#F9FAFB" },
  inProgressIcon: { width: 52, height: 52 },
  practiceEmpty: { alignItems: "center", paddingVertical: 60, gap: 12 },
  practiceEmptyText: { fontSize: 16, fontWeight: "700", color: Colors.textPrimary },
  practiceEmptySub: { fontSize: 13, color: Colors.textSecondary, textAlign: "center", paddingHorizontal: 24 },
});
