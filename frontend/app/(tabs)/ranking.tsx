import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
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
  France: "🇫🇷",
  Germany: "🇩🇪",
  Spain: "🇪🇸",
  Italy: "🇮🇹",
  UnitedKingdom: "🇬🇧",
  UnitedStates: "🇺🇸",
  Canada: "🇨🇦",
  Brazil: "🇧🇷",
  Japan: "🇯🇵",
  China: "🇨🇳",
  India: "🇮🇳",
  Russia: "🇷🇺",
};

const USER_ID = "c83b94c4-1aec-45e2-8c36-c1df039159f6";

export default function RankingScreen() {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [rankingData, setRankingData] = useState<{ name: string; points: string; country?: string }[]>([]);
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [user, setUser] = useState<{ username: string } | null>(null);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(USER_ID);
        const userStats = await getUserStats(USER_ID);

        setUser(userData || { username: "Unknown" });
        setStats(userStats.length ? userStats[0] : null);
        setUserCountry(userData?.country || "Unknown");
      } catch (error) {
        console.error("Erreur récupération user:", error);
        setUserCountry("Unknown");
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (!userCountry) return;

    const fetchRanking = async () => {
      try {
        const leaderboard = selectedRegion === "Europe"
          ? await getLeaderBoard()
          : await getLeaderBoardByCountry(userCountry);

        if (!Array.isArray(leaderboard)) throw new Error("Format de données invalide");

        const rankingWithCountries = await Promise.all(
          leaderboard.map(async (entry) => {
            const userDetails = await getUser(entry.user_id);
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
      }
    };

    fetchRanking();
  }, [selectedRegion, userCountry]);

  return (
    <View style={globalStyles.container}>
      <ProfileCard
        username={user?.username || "Unknown"}
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
            { label: "🇪🇺 All of Europe", value: "Europe" },
            userCountry ? { label: `🌍 All of ${userCountry}`, value: userCountry } : null,
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
