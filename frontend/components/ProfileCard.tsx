import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import rankingStyles from "@/styles/RankingStyles";
import globalStyles from "@/styles/globalStyles";

interface ProfileCardProps {
  username: string;
  score: number;
  highScore: number;
}

export default function ProfileCard({ username, score, highScore }: ProfileCardProps) {
  return (
    <View style={rankingStyles.profileHeader}>
      <View style={rankingStyles.profileIcon}>
        <Ionicons name="person-circle-outline" size={60} color="white" />
      </View>
      <View>
        <Text style={globalStyles.Title}>{username}</Text>
        <Text style={rankingStyles.profileScore}>Score: {score} pts</Text>
      </View>
    </View>
  );
}
