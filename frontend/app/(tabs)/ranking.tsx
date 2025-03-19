import { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert, TouchableOpacity, Image } from "react-native";
import globalStyles from "../../styles/globalStyles";
import RankingTab from "../../components/RankingTab";
import { getLeaderBoard, getLeaderBoardByCountry } from "../../services/leaderbordService"; 
import { Ionicons } from "@expo/vector-icons";

export default function RankingScreen() {
  const [selectedTab, setSelectedTab] = useState<"National" | "Europe">("Europe");
  const [rankingData, setRankingData] = useState<{ name: string; points: string; country?: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRanking = async () => {
      setLoading(true);
      try {
        const data = selectedTab === "National"
          ? await getLeaderBoardByCountry("France")
          : await getLeaderBoard();

        if (Array.isArray(data)) {
          setRankingData(data.map((entry) => ({
            name: entry.users?.username ?? "Unknown",
            points: `${entry.total_points ?? 0} pts`,
            country: entry.users?.country ?? "Unknown",
          })));
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        Alert.alert("Error", "Unable to load ranking.");
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, [selectedTab]);

  return (
    <View style={globalStyles.container}>

      {/* 🔹 Profil de l'utilisateur */}
      <View style={globalStyles.profileHeader}>
      <View style={globalStyles.profileIcon}>
          <Ionicons name="person-circle-outline" size={50} color="white" /> 
        </View>
        <View>
          <Text style={globalStyles.profileUsername}>Kai</Text>
          <Text style={globalStyles.profileScore}>Score: 2100 pts</Text>
          <Text style={globalStyles.profileHighScore}>Highest Monthly Score: 500</Text>
        </View>
      </View>

      {/* 🔹 Leaderboard Header */}
      <View style={globalStyles.leaderboardHeader}>
        <Text style={globalStyles.leaderboardTitle}>Leaderboard</Text>
        <TouchableOpacity>
          <Text style={globalStyles.leaderboardShowAll}>Show all</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Sélecteur de région */}
      <TouchableOpacity style={globalStyles.regionSelector} onPress={() => setSelectedTab("Europe")}>
        <Text style={globalStyles.regionSelectorText}>🇪🇺 All of Europe</Text>
      </TouchableOpacity>

      {/* 🔹 Classements */}
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
      ) : (
        <>
          {/* 🔹 Top 3 all time */}
          <Text style={globalStyles.rankSectionTitle}>Top 3 of all Time</Text>
          <FlatList
            data={rankingData.slice(0, 3)}
            keyExtractor={(item, index) => `alltime-${index}`}
            renderItem={({ item, index }) => (
              <View style={globalStyles.rankItem}>
                <Text style={globalStyles.rankPosition}>{index + 1}.</Text>
                <View>
                  <Text style={globalStyles.rankName}>{item.name}</Text>
                  <Text style={globalStyles.rankCountry}>🇩🇪 Germany</Text>
                </View>
                <Text style={globalStyles.rankPoints}>{item.points}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* 🔹 Top 3 of this month */}
          <Text style={globalStyles.rankSectionTitle}>Top 3 of this month</Text>
          <FlatList
            data={rankingData.slice(0, 3)}
            keyExtractor={(item, index) => `month-${index}`}
            renderItem={({ item, index }) => (
              <View style={globalStyles.rankItem}>
                <Text style={globalStyles.rankPosition}>{index + 1}.</Text>
                <View>
                  <Text style={globalStyles.rankName}>{item.name}</Text>
                  <Text style={globalStyles.rankCountry}>🇩🇪 Germany</Text>
                </View>
                <Text style={globalStyles.rankPoints}>{item.points}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
}
