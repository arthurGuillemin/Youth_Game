import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import globalStyles from "../../styles/globalStyles";
import Header from "../../components/Header";

export default function HomeScreen() {
  const games = [
    { id: "1", title: "Find the WORDS", color: "#02026B" },
    { id: "2", title: "Eurovision BLIND TEST", color: "#D9DBFD" },
    { id: "3", title: "Euro QUIZZ", color: "#F5F5FF" },
    { id: "4", title: "Find the WORDS", color: "#A0A4FF" },
    { id: "5", title: "Find the WORDS", color: "#02026B" },
    { id: "6", title: "Eurovision BLIND TEST", color: "#D9DBFD" },
    { id: "7", title: "Euro QUIZZ", color: "#F5F5FF" },
    { id: "8", title: "Find the WORDS", color: "#A0A4FF" },
  ];

  return (
    <View style={globalStyles.container}>
      <Header title="WELCOME TO" subtitle="Youth Games" showProfileCard={true} />
      <Text style={globalStyles.sectionTitle}>GAMES AWAITING PLAYERS</Text>
      <FlatList
        data={games}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard title={item.title} color={item.color} />}
        contentContainerStyle={globalStyles.gamesContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
