import RewardButton from "../../components/RewardButton";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";

export default function RewardScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.Title}>Your Rewards</Text>
      <RewardButton />
    </View>
  );
}
