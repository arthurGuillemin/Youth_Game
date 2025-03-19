import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../styles/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 70,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: "#4aabff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: "Ranking",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          title: "Reward",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "cash" : "cash-outline"} size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
