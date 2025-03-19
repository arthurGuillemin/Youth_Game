import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import ProfileButton from "../../components/ProfileButton";
import globalStyles from "../../styles/globalStyles";

export default function HomeScreen() {
  const games = [
    { id: "1", title: "QuizzGame", isMultiplayer: true },
    { id: "2", title: "EmojiGame", isMultiplayer: false },
    { id: "3", title: "EU Quizz", isMultiplayer: false },
    { id: "4", title: "Comming soon", isMultiplayer: true },
    { id: "5", title: "Comming soon", isMultiplayer: false },
    { id: "6", title: "Comming soon", isMultiplayer: false },]

  return (
    <View style={[globalStyles.container, { flex: 1, paddingHorizontal: 20 }]}>
      <ProfileButton />
      <View style={{ marginTop: 100 }}>
        <Text style={globalStyles.Subtitle}>Welcome</Text>
        <Text style={globalStyles.Subtitle}>Back!</Text>
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <GameCard
          title="EU Quizz"
          textColor="#ffffff"
          variant="rectangle"
          image={require("../../assets/images/ReadyForAQuiz.png")}
        />
      </View>

      <Text style={globalStyles.Title}>Minigames</Text>

      <FlatList
        data={games}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {

          return <GameCard title={item.title} variant="square" />;
        }}
        contentContainerStyle={{ flexGrow: 1 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
