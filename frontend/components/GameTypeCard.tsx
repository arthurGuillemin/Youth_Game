import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function GameTypeCard({ title }: { title: string }) {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.gameTitle}>{title}</Text>
      <Text style={globalStyles.gameSubtitle}>MULTIPLAYER</Text>
    </View>
  );
}
