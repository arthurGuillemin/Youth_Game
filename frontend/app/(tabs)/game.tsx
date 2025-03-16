import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import globalStyles from "../../styles/globalStyles";
import Header from "@/components/Header";

export default function GameScreen() {
  const games = [
    { id: "1", title: "Type of quizz", isMultiplayer: true },
    { id: "2", title: "Type of quizz", isMultiplayer: false },
    { id: "3", title: "Type of quizz", isMultiplayer: true },
    { id: "4", title: "Type of quizz", isMultiplayer: false },
    { id: "5", title: "Type of quizz", isMultiplayer: true },
    { id: "6", title: "Type of quizz", isMultiplayer: true },
    { id: "7", title: "Type of quizz", isMultiplayer: false },
    { id: "8", title: "Type of quizz", isMultiplayer: true },
    { id: "9", title: "Type of quizz", isMultiplayer: false },
    { id: "10", title: "Type of quizz", isMultiplayer: true },
  ];

  return (
    <View style={globalStyles.container}>
      <Header title="START THE" subtitle="Games" showSearchBar={true} />
      <Text style={globalStyles.sectionTitle}>CREATE A PARTY</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GameCard title={item.title} variant="rectangle" isMultiplayer={item.isMultiplayer} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
