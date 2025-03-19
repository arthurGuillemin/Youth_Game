import GameEmoji from "@/components/GameEmoji";
import { View, Button } from "react-native";
import globalStyles from "@/styles/globalStyles";
import { useRouter } from "expo-router";


export default function GameEmojiScreen() {
  const router = useRouter(); 

  return (
    <View style={globalStyles.container}>
      <GameEmoji />
      <Button title="Retour" onPress={() => router.back()} />
    </View>
  );
}
