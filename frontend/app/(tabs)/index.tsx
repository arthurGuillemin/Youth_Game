import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import ProfileButton from "../../components/ProfileButton";
import globalStyles from "../../styles/globalStyles";
import theme from "@/styles/theme";

export default function HomeScreen() {
  const games = [
    { id: "1", title: "QuizzGame", isMultiplayer: true },
    { id: "2", title: "EmojiGame", isMultiplayer: false },
    { id: "3", title: "EU Quizz", isMultiplayer: false },
    { id: "4", title: "Comming soon", isMultiplayer: true },
    { id: "5", title: "Comming soon", isMultiplayer: false },
    { id: "6", title: "Comming soon", isMultiplayer: false },]

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <ProfileButton />
      <View style={{ marginTop: 100 }}>
        <Text style={[globalStyles.Title, {marginLeft: theme.spacing.medium}]}>Welcome</Text>
        <Text style={[globalStyles.Title, {marginLeft: theme.spacing.medium}]}>Back!</Text>
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <GameCard
          title="EU Quizz"
          textColor="#ffffff"
          variant="rectangle"
          image={require("../../assets/images/ReadyForAQuiz.png")}
        />
      </View>

      <Text style={globalStyles.Subtitle}>Reward</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard title={item.title} variant="square" />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={globalStyles.Subtitle}>Minigames</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard title={item.title} variant="square" />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
