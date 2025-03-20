import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import euQuizzStyles from "../styles/euQuizzStyles";
import RankingCard from "../components/euQuizz/RankingCard";
import globalStyles from "@/styles/globalStyles";
import theme from "@/styles/theme";

export default function ResultScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.Title, {textAlign: 'center', marginTop: 130, marginBottom: theme.spacing.xxlarge}]}>Results</Text>

      <RankingCard
        playerName="Maria won!"
        score={20}
        alignRight={false}
      />
      <RankingCard
        playerName="Paul"
        score={5}
        alignRight={true}
      />
      <TouchableOpacity
        style={euQuizzStyles.nextButton}
        onPress={() => router.push("../(tabs)")}
      >
        <Text style={euQuizzStyles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}