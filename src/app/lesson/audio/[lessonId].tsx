import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getLessonById } from "@/data/units";
import { Colors } from "@/theme";
import { Images } from "@/constants/images";
import { useLanguageStore } from "@/store/languageStore";
import { useStreamAudioCall } from "@/hooks/useStreamAudioCall";
import { useUser } from "@clerk/clerk-expo";

const FEEDBACK = [
  { label: "Speaking", value: "Excellent", color: Colors.success },
  { label: "Pronunciation", value: "Great", color: Colors.linguaBlue },
  { label: "Grammar", value: "Good", color: Colors.linguaPurple },
] as const;

export default function AudioLessonScreen() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const { user } = useUser();
  const { selectedLanguageId } = useLanguageStore();

  const [cameraOn, setCameraOn] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);

  const result = getLessonById(lessonId ?? "");
  const lesson = result?.lesson;

  const { status, isMuted, errorMessage, join, leave, toggleMute } =
    useStreamAudioCall({
      lessonId: lessonId ?? "",
      languageId: selectedLanguageId ?? "unknown",
    });

  const teacherMessage =
    lesson?.aiTeacherPrompt?.introMessage ?? "¡Muy bien! That was great! 👏";

  const handleEndCall = async () => {
    await leave();
    router.back();
  };

  if (!lesson) {
    return (
      <SafeAreaView edges={["top"]} style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.notFoundText}>Lesson not found.</Text>
          <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
            <Text style={{ color: Colors.linguaPurple }}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Connecting overlay ──────────────────────────────────────────────────────
  if (status === "connecting") {
    return (
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={Colors.linguaPurple} />
          <Text style={styles.statusText}>Connecting to lesson…</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Error state ─────────────────────────────────────────────────────────────
  if (status === "error") {
    return (
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.centered}>
          <Ionicons name="alert-circle-outline" size={48} color={Colors.error} />
          <Text style={styles.statusText}>
            {errorMessage ?? "Something went wrong."}
          </Text>
          <TouchableOpacity onPress={join} style={styles.retryBtn}>
            <Text style={styles.retryBtnText}>Retry</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 12 }}>
            <Text style={{ color: Colors.textSecondary }}>Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Ended state ──────────────────────────────────────────────────────────────
  if (status === "ended") {
    return (
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.centered}>
          <Ionicons name="checkmark-circle-outline" size={48} color={Colors.success} />
          <Text style={styles.statusText}>Lesson ended</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.retryBtn}>
            <Text style={styles.retryBtnText}>Back to lessons</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Idle (pre-call) ─────────────────────────────────────────────────────────
  if (status === "idle") {
    return (
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={8} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>{lesson.title}</Text>
            <Text style={styles.onlineText}>AI Teacher · Audio Lesson</Text>
          </View>
        </View>

        <View style={[styles.teacherArea, { width }]}>
          <View style={styles.roomBackground} />
          <Image source={Images.mascotWelcome} style={styles.mascotImage} resizeMode="contain" />
          {subtitlesOn && (
            <View style={styles.speechBubble}>
              <View style={styles.speechBubbleContent}>
                <Text style={styles.speechBubbleText}>{teacherMessage}</Text>
              </View>
              <View style={styles.speechTail} />
            </View>
          )}
        </View>

        <View style={styles.userInfoRow}>
          <Ionicons name="person-circle-outline" size={20} color={Colors.textSecondary} />
          <Text style={styles.userInfoText}>
            Joining as {user?.firstName ?? user?.emailAddresses?.[0]?.emailAddress ?? "You"}
          </Text>
        </View>

        <View style={styles.startCallContainer}>
          <TouchableOpacity style={styles.startCallBtn} onPress={join} activeOpacity={0.85}>
            <Ionicons name="mic" size={22} color="#fff" />
            <Text style={styles.startCallBtnText}>Start Audio Lesson</Text>
          </TouchableOpacity>
          <Text style={styles.startCallHint}>
            You will join an audio-only call with your AI teacher.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // ── Joined (active call) ────────────────────────────────────────────────────
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleEndCall} hitSlop={8} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>AI Teacher</Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineText}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => setCameraOn((v) => !v)}
            style={[styles.headerIcon, !cameraOn && styles.headerIconOff]}
            hitSlop={8}
          >
            <Ionicons
              name={cameraOn ? "videocam" : "videocam-off"}
              size={18}
              color={cameraOn ? Colors.textPrimary : Colors.textSecondary}
            />
          </TouchableOpacity>
          <View style={styles.participantBadge}>
            <Text style={styles.participantCount}>12</Text>
          </View>
          <TouchableOpacity style={styles.headerIcon} hitSlop={8}>
            <Ionicons name="notifications-outline" size={18} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* ── Teacher Video Area ── */}
      <View style={[styles.teacherArea, { width }]}>
        <View style={styles.roomBackground} />

        {/* Muted badge */}
        {isMuted && (
          <View style={styles.mutedBadge}>
            <Ionicons name="mic-off" size={14} color="#fff" />
            <Text style={styles.mutedBadgeText}>Muted</Text>
          </View>
        )}

        {/* Fox mascot */}
        <Image
          source={Images.mascotWelcome}
          style={styles.mascotImage}
          resizeMode="contain"
        />

        {/* Speech bubble */}
        {subtitlesOn && (
          <View style={styles.speechBubble}>
            <View style={styles.speechBubbleContent}>
              <Text style={styles.speechBubbleText}>{teacherMessage}</Text>
              <TouchableOpacity hitSlop={8}>
                <Ionicons name="volume-high" size={22} color={Colors.linguaPurple} />
              </TouchableOpacity>
            </View>
            <View style={styles.speechTail} />
          </View>
        )}
      </View>

      {/* ── Controls ── */}
      <View style={styles.controls}>
        <ControlButton
          icon={<Ionicons name={cameraOn ? "videocam" : "videocam-off"} size={24} color={Colors.textPrimary} />}
          label="Camera"
          onPress={() => setCameraOn((v) => !v)}
          active={cameraOn}
        />
        <ControlButton
          icon={<Ionicons name={isMuted ? "mic-off" : "mic"} size={24} color={Colors.textPrimary} />}
          label={isMuted ? "Unmute" : "Mute"}
          onPress={toggleMute}
          active={!isMuted}
        />
        <ControlButton
          icon={<MaterialCommunityIcons name="translate" size={24} color={Colors.textPrimary} />}
          label="Subtitles"
          onPress={() => setSubtitlesOn((v) => !v)}
          active={subtitlesOn}
        />
        <ControlButton
          icon={<Ionicons name="call" size={24} color="#fff" />}
          label="End Call"
          onPress={handleEndCall}
          variant="end"
        />
      </View>

      {/* ── Feedback Card ── */}
      <View style={styles.feedbackCard}>
        {FEEDBACK.map((item, i) => (
          <View
            key={item.label}
            style={[styles.feedbackItem, i < FEEDBACK.length - 1 && styles.feedbackDivider]}
          >
            <Text style={styles.feedbackLabel}>{item.label}</Text>
            <Text style={[styles.feedbackValue, { color: item.color }]}>{item.value}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

function ControlButton({
  icon,
  label,
  onPress,
  variant,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onPress: () => void;
  variant?: "end";
  active?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.controlWrapper} onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.controlCircle,
          variant === "end" && styles.controlCircleEnd,
          active === false && styles.controlCircleMuted,
        ]}
      >
        {icon}
      </View>
      <Text style={styles.controlLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const TEACHER_HEIGHT = 360;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    color: Colors.textSecondary,
  },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.background,
  },
  backBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCenter: {
    flex: 1,
    marginLeft: 4,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
  onlineRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 1,
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.success,
  },
  onlineText: {
    fontSize: 13,
    color: Colors.success,
    fontWeight: "500",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIconOff: {
    backgroundColor: Colors.surface,
  },
  participantBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  participantCount: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.textPrimary,
  },

  // Teacher area
  teacherArea: {
    height: TEACHER_HEIGHT,
    backgroundColor: "#E8E4DC",
    overflow: "hidden",
    position: "relative",
  },
  roomBackground: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#D4C9B8",
  },
  mascotImage: {
    position: "absolute",
    bottom: 80,
    left: "50%",
    marginLeft: -120,
    width: 240,
    height: 260,
  },
  studentThumbnail: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 90,
    height: 110,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: Colors.background,
    backgroundColor: Colors.surface,
  },
  studentImage: {
    width: "100%",
    height: "100%",
  },
  speechBubble: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  speechBubbleContent: {
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  speechBubbleText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: Colors.textPrimary,
    lineHeight: 22,
  },
  speechTail: {
    alignSelf: "flex-start",
    marginLeft: 24,
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: Colors.background,
  },

  // Controls
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: Colors.background,
  },
  controlWrapper: {
    alignItems: "center",
    gap: 6,
  },
  controlCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.surface,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  controlCircleEnd: {
    backgroundColor: Colors.error,
    borderColor: Colors.error,
  },
  controlCircleMuted: {
    backgroundColor: "#F0EEF8",
    borderColor: Colors.border,
  },
  controlLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: "500",
  },

  // Feedback
  feedbackCard: {
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: Colors.background,
    borderWidth: 1.5,
    borderColor: Colors.border,
    flexDirection: "row",
    overflow: "hidden",
  },
  feedbackItem: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 16,
    gap: 4,
  },
  feedbackDivider: {
    borderRightWidth: 1.5,
    borderRightColor: Colors.border,
  },
  feedbackLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  feedbackValue: {
    fontSize: 14,
    fontWeight: "700",
  },

  // Status / error / connecting screens
  statusText: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 12,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  retryBtn: {
    marginTop: 20,
    backgroundColor: Colors.linguaPurple,
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 12,
  },
  retryBtnText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },

  // Idle (pre-call) screen
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  userInfoText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  startCallContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 32,
    paddingHorizontal: 24,
    gap: 12,
  },
  startCallBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.linguaPurple,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    width: "100%",
    justifyContent: "center",
  },
  startCallBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  startCallHint: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: "center",
  },

  // Muted badge overlay
  mutedBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "rgba(0,0,0,0.55)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  mutedBadgeText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },

  // Student name tag inside thumbnail
  studentNameTag: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingVertical: 3,
    alignItems: "center",
  },
  studentNameText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "600",
  },
});
