import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

export default function GameCard({ title, color }) {
  return (
    <View style={[globalStyles.gameCard, { backgroundColor: color }]}>
      <Ionicons
        name="person-outline"
        size={14}
        style={globalStyles.gameIcon}
      />
      <Text style={globalStyles.gamePlayerCount}>0/5</Text>
      <Text style={globalStyles.gameTitle}>{title}</Text>
    </View>
  );
}
