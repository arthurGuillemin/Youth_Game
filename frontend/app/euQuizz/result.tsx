import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import euQuizzStyles from "../../styles/euQuizzStyles";
import RankingCard from "../../components/euQuizz/RankingCard";

export default function ResultScreen() {
  const router = useRouter();

  const rankingData = [
    { rank: 1, playerName: "Marie", score: 100 },
    { rank: 2, playerName: "Marie", score: 50 },
    { rank: 3, playerName: "Marie", score: 10 },
    { rank: 4, playerName: "Marie", score: null },
    { rank: 5, playerName: "Marie", score: null },
  ];

  return (
    <View style={euQuizzStyles.resultContainer}>
      <Text style={euQuizzStyles.resultTitle}>Quiz duel</Text>
      <Text style={euQuizzStyles.resultSubtitle}>Results</Text>

      <Ionicons name="podium-outline" size={150} color="#ffffff" style={euQuizzStyles.podiumIcon} />

      {rankingData.map((player) => (
        <RankingCard key={player.rank} {...player} />
      ))}

      <TouchableOpacity
        style={euQuizzStyles.nextButton}
        onPress={() => router.push("/(tabs)/game")}
      >
        <Text style={euQuizzStyles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
