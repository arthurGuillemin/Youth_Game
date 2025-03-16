import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";
import Header from "@/components/Header";
import ProfileInfoRow from "@/components/ProfileInfoRow"; 

export default function SettingScreen() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Header title="YOUR" subtitle="Settings" showGoBack={true} />

      <Text style={globalStyles.sectionTitle}>PREFERENCES</Text>

      <ProfileInfoRow
        text="Push notifications"
        hideIcon={true}
        switchValue={pushNotifications}
        onSwitchToggle={() => setPushNotifications(!pushNotifications)}
      />

      <ProfileInfoRow
        text="Email notifications"
        hideIcon={true}
        switchValue={emailNotifications}
        onSwitchToggle={() => setEmailNotifications(!emailNotifications)}
      />

      <Text style={globalStyles.sectionTitle}>SUPPORT</Text>

      <TouchableOpacity onPress={() => console.log("Naviguer vers l'aide")}>
        <ProfileInfoRow text="Help" hideIcon={true} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Naviguer vers 'About'")}>
        <ProfileInfoRow text="About Youth Game" hideIcon={true} />
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.logoutButton} onPress={() => console.log("Déconnexion (brouillon)")}>
        <Ionicons name="log-out-outline" size={20} color="white" />
        <Text style={globalStyles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
