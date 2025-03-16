import { View, Text, ScrollView } from "react-native";
import SearchBar from "../../components/SearchBar";
import GameTypeCard from "../../components/GameTypeCard";
import globalStyles from "../../styles/globalStyles";

export default function GameScreen() {
  const games = ["Type of quizz", "Type of quizz", "Type of quizz", "Type of quizz", "Type of quizz"];

  return (
    <ScrollView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>START THE</Text>
        <Text style={globalStyles.headerSubtitle}>Games</Text>
      </View>

      <View style={globalStyles.searchBarContainer}>
        <SearchBar />
      </View>

      <Text style={globalStyles.sectionTitle}>CREATE A PARTY</Text>

      {games.map((game, index) => (
        <GameTypeCard key={index} title={game} />
      ))}
    </ScrollView>
  );
}
