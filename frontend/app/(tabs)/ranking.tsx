import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import globalStyles from "@/styles/globalStyles";
import RankingTab from "../../components/RankingTab";
import ProfileCard from "../../components/ProfileCard";
import { getLeaderBoard, getLeaderBoardByCountry } from "../../services/leaderbordService";
import { getUser } from "../../services/userService";
import { getUserStats } from "../../services/playerStatsService";

import rankingStyles from "@/styles/RankingStyles";
import { Ionicons } from "@expo/vector-icons";

const countryFlags: { [key: string]: string } = {
  France: "\ud83c\uddeb\ud83c\uddf7",
  Germany: "\ud83c\udde9\ud83c\uddea",
  Spain: "\ud83c\uddea\ud83c\uddf8",
  Italy: "\ud83c\uddee\ud83c\uddf9",
  UnitedKingdom: "\ud83c\uddec\ud83c\udde7",
  UnitedStates: "\ud83c\uddfa\ud83c\uddf8",
  Canada: "\ud83c\udde8\ud83c\udde6",
  Brazil: "\ud83c\udde7\ud83c\uddf7",
  Japan: "\ud83c\uddef\ud83c\uddf5",
  China: "\ud83c\udde8\ud83c\uddf3",
  India: "\ud83c\uddee\ud83c\uddf3",
  Russia: "\ud83c\uddf7\ud83c\uddfa",
};

const USER_ID = "c83b94c4-1aec-45e2-8c36-c1df039159f6";

export default function RankingScreen() {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [rankingData, setRankingData] = useState<{ name: string; points: string; country?: string }[]>([]);
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(USER_ID);
        const userStats = await getUserStats(USER_ID);

        if (!userData || !userData.country) throw new Error("Pays introuvable");

        setUser(userData);
        setUserCountry(userData.country);
        setStats(userStats.length ? userStats[0] : null);
      } catch (error) {
        console.error("Erreur récupération user:", error);
        setUserCountry("Unknown");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (!userCountry) return;

    const fetchRanking = async () => {
      setLoading(true);
      try {
        const leaderboard = selectedRegion === "Europe"
          ? await getLeaderBoard()
          : await getLeaderBoardByCountry(userCountry);
    
        if (!Array.isArray(leaderboard)) throw new Error("Format de données invalide");
    
        // Récupérer les détails utilisateur pour chaque joueur
        const rankingWithCountries = await Promise.all(
          leaderboard.map(async (entry) => {
            const userDetails = await getUser(entry.user_id); // Appel API pour obtenir le pays
            return {
              name: entry.users?.username ?? "Unknown",
              points: `${entry.total_points ?? 0} pts`,
              country: userDetails?.country ?? "Unknown",
            };
          })
        );
    
        setRankingData(rankingWithCountries);
      } catch (error) {
        Alert.alert("Error", "Unable to load ranking.");
      } finally {
        setLoading(false);
      }
    };
    
    

    fetchRanking();
  }, [selectedRegion, userCountry]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#00D8FF" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <ProfileCard 
        username={user?.username || "Loading..."} 
        score={stats?.total_points || 0} 
        highScore={stats?.highest_score || 0} 
      />

      <View style={rankingStyles.leaderboardHeader}>
        <Text style={globalStyles.Subtitle}>Leaderboard</Text>
      </View>

      <View style={rankingStyles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedRegion(value)}
          items={[
            { label: "\ud83c\uddea\ud83c\uddfa All of Europe", value: "Europe" },
            userCountry ? { label: `\ud83c\udf0d All of ${userCountry}`, value: userCountry } : null,
          ].filter(Boolean)}
          value={selectedRegion}
          style={{
            inputIOS: rankingStyles.pickerText,
          }}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          placeholder={{}}
          Icon={() => (
            <Ionicons name="chevron-down-outline" size={24} style={rankingStyles.pickerIcon} />
          )}
        />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <RankingTab title="Leaderboard" data={rankingData} countryFlags={countryFlags} />
      </ScrollView>
    </View>
  );
}