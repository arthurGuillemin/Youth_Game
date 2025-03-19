import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import Header from "@/components/Header";
import ProfileInfoRow from "../../components/ProfileInfoRow";
import { getUser } from "../../services/userService"; 

export default function ProfileScreen() {
  const router = useRouter();
  const userId = "c83b94c4-1aec-45e2-8c36-c1df039159f6";
  const [user, setUser] = useState<{ username: string; email: string | null; country: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(userId);
      if (data) {
        setUser(data);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={globalStyles.container}>
      </View>
    );
  }

  const profileInfo = [
    { icon: "person-outline", text: user.username || "Unknown" },
    { icon: "mail-outline", text: user.email || "No email provided" },
    { icon: "globe-outline", text: user.country || "No country specified" },
  ];

  return (
    <ScrollView style={globalStyles.container}>
      <Header title="THIS IS YOUR" subtitle="Profile" rightIcon="settings" showProfileCard={true} showExtraStats={true} />

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
