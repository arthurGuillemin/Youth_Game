import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import euQuizzStyles from "../../styles/euQuizzStyles";
import globalStyles from "@/styles/globalStyles";

interface RankingCardProps {
  rank?: number;
  playerName: string;
  score?: number | null;
  alignRight?: boolean;
}

export default function RankingCard({ rank, playerName, score, alignRight }: RankingCardProps) {
  return (
    <View style={[euQuizzStyles.rankingCard, alignRight ? euQuizzStyles.alignRight : euQuizzStyles.alignLeft]}>
      {alignRight ? (
        <>
          <View style={euQuizzStyles.textContainer}>
            {rank !== undefined && <Text>{rank}.</Text>}
            <Text style={globalStyles.Title}>{playerName}</Text>
            <Text style={globalStyles.Subtitle}>
              {score ? (typeof score === "number" ? `+ ${score} pts` : score) : "-"}
            </Text>
          </View>
          <Ionicons name="person-circle-outline" size={70} color="white" style={euQuizzStyles.avatarIcon} />
        </>
      ) : (
        <>
          <Ionicons name="person-circle-outline" size={70} color="white" style={euQuizzStyles.avatarIcon} />
          <View style={euQuizzStyles.textContainer}>
            {rank !== undefined && <Text>{rank}.</Text>}
            <Text style={[globalStyles.Title, {textAlign: 'right' }]}>{playerName}</Text>
            <Text style={[globalStyles.Subtitle, {textAlign: 'right'}]}>
              {score ? (typeof score === "number" ? `+ ${score} pts` : score) : "-"}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
