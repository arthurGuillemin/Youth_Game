import { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import globalStyles from "../../styles/globalStyles";
import TabSwitcher from "../../components/TabSwitcher";
import SimpleCard from "../../components/SimpleCard";
import { getLeaderBoard, getLeaderBoardByCountry } from "../../services/leaderbordService"; 

export default function RankingScreen() {
  const [selectedTab, setSelectedTab] = useState<"National" | "Europe">("National");
  const [rankingData, setRankingData] = useState<{ name: string; points: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const tabs = [
    { key: "National", label: "NATIONAL" },
    { key: "Europe", label: "EUROPE" },
  ];

  useEffect(() => {
    const fetchRanking = async () => {
      setLoading(true);
      let data = null;

      try {
        if (selectedTab === "National") {
          console.log("🔵 Chargement du classement National...");
          data = await getLeaderBoardByCountry("France"); 
        } else {
          console.log("🟡 Chargement du classement Européen...");
          data = await getLeaderBoard();
        }

        console.log(`🔍 Données reçues pour ${selectedTab}:`, data);

        if (Array.isArray(data)) {
          const formattedData = data.map((entry) => ({
            name: entry.users?.username ?? "Inconnu",
            points: `${entry.total_points ?? 0} pts`,
          }));

          setRankingData(formattedData);
        } else {
          throw new Error("Format de données invalide");
        }
      } catch (error) {
        console.error(`⛔ Erreur lors du chargement du classement ${selectedTab}:`, error);
        Alert.alert("Erreur", "Impossible de charger le classement.");
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, [selectedTab]);

  return (
    <View style={globalStyles.container}>

      <TabSwitcher tabs={tabs} selectedTab={selectedTab} onSelectTab={setSelectedTab} />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={rankingData}
          keyExtractor={(item, index) => `${selectedTab}-${index}`}
          renderItem={({ item }) => <SimpleCard title={item.name} subtitle={item.points} />}
          contentContainerStyle={globalStyles.rankingList}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
