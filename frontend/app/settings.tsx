import { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import settingStyles from "../styles/settingStyles";
import theme from "../styles/theme";

export default function SettingScreen() {
  const router = useRouter();
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <View style={settingStyles.container}>
      <View style={settingStyles.header}>
        <Text style={settingStyles.headerTitle}>YOUR</Text>
        <Text style={settingStyles.headerSubtitle}>Settings</Text>
      </View>

      <Text style={settingStyles.sectionTitle}>PREFERENCES</Text>
      <View style={settingStyles.settingRow}>
        <Text style={settingStyles.settingText}>Push notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={() => setPushNotifications(!pushNotifications)}
          trackColor={{ true: theme.colors.accent, false: theme.colors.secondary }}
          thumbColor="#fff"
        />
      </View>
      <View style={settingStyles.settingRow}>
        <Text style={settingStyles.settingText}>Email notifications</Text>
        <Switch
          value={emailNotifications}
          onValueChange={() => setEmailNotifications(!emailNotifications)}
          trackColor={{ true: theme.colors.accent, false: theme.colors.secondary }}
          thumbColor="#fff"
        />
      </View>

      <Text style={settingStyles.sectionTitle}>SUPPORT</Text>
      <TouchableOpacity style={settingStyles.settingRow}>
        <Text style={settingStyles.settingText}>Help</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={settingStyles.settingRow}>
        <Text style={settingStyles.settingText}>About Youth Game</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={settingStyles.logoutRow}>
        <Text style={settingStyles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
