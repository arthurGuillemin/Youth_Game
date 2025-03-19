import { View, Text } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";

interface RankingCardProps {
  rank: number;
  playerName: string;
  score?: number | null;
}

export default function RankingCard({ rank, playerName, score }: RankingCardProps) {
  return (
    <View style={euQuizzStyles.rankingCard}>
      <Text style={euQuizzStyles.rankingText}>{rank}.</Text>
      <Text style={euQuizzStyles.rankingName}>{playerName}</Text>
      <Text style={euQuizzStyles.rankingScore}>{score ? `+ ${score} pts` : "-"}</Text>
    </View>
  );
}
