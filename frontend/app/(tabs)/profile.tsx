import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import profileStyles from "../../styles/profileStyles";
import theme from "../../styles/theme";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <ScrollView style={profileStyles.container}>
      <View style={profileStyles.header}>
        <Text style={profileStyles.headerTitle}>THIS IS YOUR PROFIL</Text>
        <Text style={profileStyles.headerSubtitle}>Arthur Guillemin</Text>
        <TouchableOpacity
          style={profileStyles.settingsButton}
          onPress={() => router.push("../settings")}
        >
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={[profileStyles.profileCard]}>
        <View style={profileStyles.profileHeader}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={profileStyles.profileImage}
          />
          <View>
            <Text style={profileStyles.profileUsername}>Thutur_Guigui</Text>
            <Text style={profileStyles.profileCountry}>
              <Ionicons name="location-outline" size={14} /> Country
            </Text>
          </View>
        </View>
        <View style={profileStyles.statsContainer}>
          <View style={profileStyles.statsBox}>
            <Ionicons name="trophy-outline" size={16} />
            <Text>0 000 pts</Text>
          </View>
          <View style={profileStyles.statsBox}>
            <Ionicons name="podium-outline" size={16} />
            <Text>21 th</Text>
          </View>
          <View style={profileStyles.statsBox}>
            <Ionicons name="cash-outline" size={16} />
            <Text>0 000 €</Text>
          </View>
          <View style={profileStyles.statsBox}>
            <Ionicons name="chess-outline" size={16} />
            <Text>00 games</Text>
          </View>
        </View>
      </View>
      <View style={profileStyles.infoContainer}>
        {[
          { icon: "person-outline", text: "Last name  -  First name" },
          { icon: "calendar-outline", text: "25/09/2001" },
          { icon: "call-outline", text: "07 81 18 00 00" },
          { icon: "mail-outline", text: "emilie.caverne@gmail.com" },
          { icon: "eye-outline", text: "**************" },
        ].map((item, index) => (
          <View key={index} style={profileStyles.infoRow}>
            <Ionicons name={item.icon} size={20} />
            <Text style={profileStyles.infoText}>{item.text}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={profileStyles.editProfileButton}>
        <Text style={profileStyles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
