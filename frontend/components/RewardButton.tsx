import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function RewardButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/rewardInfo")}
    >
      <View >
        <Ionicons name="cash-outline" size={24} color="white" />
      </View>
      <Text>Go to Rewards</Text>
    </TouchableOpacity>
  );
}
