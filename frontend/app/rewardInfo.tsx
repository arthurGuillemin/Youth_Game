import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function RewardScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.Title}>Reward Infos</Text>
    </View>
  );
}
