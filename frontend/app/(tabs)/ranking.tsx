import { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import globalStyles from "@/styles/globalStyles";
import RankingTab from "../../components/RankingTab";
import ProfileCard from "../../components/ProfileCard";
import { getLeaderBoard, getLeaderBoardByCountry } from "../../services/leaderbordService"; 
import rankingStyles from "@/styles/RankingStyles";
import theme from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";

export default function RankingScreen() {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [rankingData, setRankingData] = useState<{ name: string; points: string; country?: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const userCountry = "Allemagne";

  useEffect(() => {
    const fetchRanking = async () => {
      setLoading(true);
      try {
        const data =
          selectedRegion === "Europe"
            ? await getLeaderBoard()
            : await getLeaderBoardByCountry(userCountry);

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
  }, [selectedRegion]);

  return (
    <View style={globalStyles.container}>

      <ProfileCard username="Kai" score={2100} highScore={500} />

      <View style={rankingStyles.leaderboardHeader}>
        <Text style={globalStyles.Subtitle}>Leaderboard</Text>
        <Text style={{color : theme.colors.text, fontSize: theme.fontSizes.small, fontFamily: theme.fonts.regular}}>Show All</Text>
        </View>
        <View style={rankingStyles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedRegion(value)}
          items={[
            { label: "🇪🇺 All of Europe", value: "Europe" },
            { label: `🌍 All of ${userCountry}`, value: userCountry },
          ]}
          value={selectedRegion}
          style={{
            inputIOS: rankingStyles.pickerText,
          }}
          useNativeAndroidPickerStyle={false} // ✅ Permet d'appliquer notre style custom
          fixAndroidTouchableBug={true} // ✅ Corrige un bug sur Android
          placeholder={{}}
          Icon={() => (
            <Ionicons name="chevron-down-outline" size={24} style={rankingStyles.pickerIcon} />
          )}
        />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <RankingTab title="Top 3 of all Time" data={rankingData} />
    <RankingTab title="Top 3 of this Month" data={rankingData} />
  </ScrollView>
</View>


  );
}
