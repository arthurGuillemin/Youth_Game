import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import Header from "@/components/Header";
import ProfileInfoRow from "../../components/ProfileInfoRow"

export default function ProfileScreen() {
  const router = useRouter();
  const profileInfo = [
    { icon: "person-outline", text: "Last name  -  First name" },
    { icon: "calendar-outline", text: "25/09/2001" },
    { icon: "call-outline", text: "07 81 18 00 00" },
    { icon: "mail-outline", text: "emilie.caverne@gmail.com" },
    { icon: "eye-outline", text: "**************" },
  ];

  return (
    <ScrollView style={globalStyles.container}>
<Header title="THIS IS YOUR" subtitle="Profile" rightIcon="settings" showProfileCard={true} showExtraStats={true}/>

<View style={globalStyles.infoContainer}>
        {profileInfo.map((item, index) => (
          <ProfileInfoRow key={index} icon={item.icon} text={item.text} />
        ))}
      </View>

      <TouchableOpacity style={globalStyles.editProfileButton}>
        <Text style={globalStyles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
