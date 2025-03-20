import GameEmoji from "@/components/GameEmoji";
import { View, Button, TouchableOpacity } from "react-native";
import globalStyles from "@/styles/globalStyles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import theme from "@/styles/theme";

export default function GameEmojiScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <View style={{ position: "relative", width: "100%", }}>
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', marginTop: theme.spacing.xxlarge, zIndex: 10, marginLeft: theme.spacing.medium }}>
          <Ionicons name="chevron-back" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <GameEmoji />
    </View>
  );
}
