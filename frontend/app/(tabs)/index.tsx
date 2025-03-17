import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import globalStyles from "../../styles/globalStyles";
import Header from "../../components/Header";

export default function HomeScreen() {
  const games = [
    { id: "1", title: "Find the words" },
    { id: "2", title: "Eurovision blind test" },
    { id: "3", title: "Euro quizz" },
    { id: "4", title: "words" },
    { id: "5", title: "Find the WORDS" },
    { id: "6", title: "Eurovision BLIND TEST" },
    { id: "7", title: "Euro QUIZZ" },
    { id: "8", title: "Find the WORDS" },
  ];

  const colors = ["#010773", "#DDE0FF", "#F5F6FF", "#A9AEFF"];

  const textColors = {
    "#010773": "#F5F6FF",
    "#DDE0FF": "#010773",
    "#F5F6FF": "#010773",
    "#A9AEFF": "#010773",
  };

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <Header title="WELCOME TO" subtitle="Youth Games" showProfileCard={true} />
      <Text style={globalStyles.sectionTitle}>GAMES AWAITING PLAYERS</Text>
      <FlatList
        data={games}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const backgroundColor = colors[index % colors.length];
          const textColor = textColors[backgroundColor as keyof typeof textColors];
          return <GameCard title={item.title} color={backgroundColor} textColor={textColor} variant="square" />;
        }}
        contentContainerStyle={[globalStyles.gamesContainer, { flexGrow: 1 }]}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />


    </View>
  );
}
