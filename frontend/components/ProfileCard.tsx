import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { getUser } from "../services/userService";

interface ProfileCardProps {
  userId: string;
  showExtraStats?: boolean;
}

export default function ProfileCard({ userId, showExtraStats = false }: ProfileCardProps) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const id = 'c83b94c4-1aec-45e2-8c36-c1df039159f6';

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("User ID envoyé à getUser:", id);
      const userData = await getUser(id);
      if (userData) {
        console.log("Utilisateur récupéré :", userData);
        setUser(userData);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [userId]);


  return (
    <View style={globalStyles.profileCard}>
      <View style={globalStyles.profileHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={globalStyles.profileImage}
        />
        <View>
          <Text style={globalStyles.profileUsername}>{user?.username || "Utilisateur"}</Text>
          <Text style={globalStyles.profileCountry}>
            <Ionicons name="location-outline" size={14} /> {user?.country || "Pays inconnu"}
          </Text>
        </View>
      </View>

      <View style={globalStyles.statsContainer}>
        <View style={globalStyles.statsBox}>
          <Ionicons name="trophy-outline" size={16} />
          <Text>0 000 pts</Text>
        </View>
        <View style={globalStyles.statsBox}>
          <Ionicons name="podium-outline" size={16} />
          <Text>21th</Text>
        </View>
      </View>

      {showExtraStats && (
        <View style={globalStyles.statsContainer}>
          <View style={globalStyles.statsBox}>
            <Ionicons name="cash-outline" size={16} />
            <Text>0 000 €</Text>
          </View>
          <View style={globalStyles.statsBox}>
            <Ionicons name="game-controller-outline" size={16} />
            <Text>00 games</Text>
          </View>
        </View>
      )}
    </View>
  );
}