import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function RankingItem({ name, points }) {
  return (
    <View style={[globalStyles.card, { flexDirection: "row", justifyContent: "space-between", marginBottom: theme.spacing.small }]}>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontWeight: "bold" }}>{points} pts</Text>
    </View>
  );
}
