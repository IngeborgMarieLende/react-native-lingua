import { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "@/theme";

type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];

const CIRCLE_SIZE = 50;
const TAB_BAR_HEIGHT = 64;

const TABS = [
  {
    name: "home",
    label: "Home",
    activeIcon: "home" as IoniconsName,
    inactiveIcon: "home-outline" as IoniconsName,
  },
  {
    name: "learn",
    label: "Learn",
    activeIcon: "book" as IoniconsName,
    inactiveIcon: "book-outline" as IoniconsName,
  },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    activeIcon: "sparkles" as IoniconsName,
    inactiveIcon: "sparkles-outline" as IoniconsName,
  },
  {
    name: "chat",
    label: "Chat",
    activeIcon: "chatbubble" as IoniconsName,
    inactiveIcon: "chatbubble-outline" as IoniconsName,
  },
  {
    name: "profile",
    label: "Profile",
    activeIcon: "person" as IoniconsName,
    inactiveIcon: "person-outline" as IoniconsName,
  },
] as const;

function CustomTabBar({
  state,
  navigation,
}: {
  state: any;
  navigation: any;
}) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabWidth = width / TABS.length;

  const circleLeft = useSharedValue(
    state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2
  );

  useEffect(() => {
    circleLeft.value = withTiming(
      state.index * tabWidth + tabWidth / 2 - CIRCLE_SIZE / 2,
      { duration: 250, easing: Easing.out(Easing.cubic) }
    );
  }, [state.index, tabWidth]);

  const circleStyle = useAnimatedStyle(() => ({
    left: circleLeft.value,
  }));

  return (
    <View
      style={[
        styles.tabBar,
        { paddingBottom: insets.bottom, height: TAB_BAR_HEIGHT + insets.bottom },
      ]}
    >
      {/* Animated active-tab circle */}
      <Animated.View style={[styles.circle, circleStyle]} />

      {state.routes.map((route: any, index: number) => {
        const tab = TABS.find((t) => t.name === route.name);
        if (!tab) return null;

        const isActive = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.inactiveIcon}
              size={22}
              color={isActive ? "#fff" : Colors.textSecondary}
            />
            {!isActive && (
              <Text style={styles.label} numberOfLines={1}>
                {tab.label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  circle: {
    position: "absolute",
    top: (TAB_BAR_HEIGHT - CIRCLE_SIZE) / 2,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: Colors.linguaPurple,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: TAB_BAR_HEIGHT,
  },
  label: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginTop: 2,
    fontFamily: "Poppins-Regular",
  },
});

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="learn" />
      <Tabs.Screen name="ai-teacher" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
