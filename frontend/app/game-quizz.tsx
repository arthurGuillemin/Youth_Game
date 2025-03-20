import GameQuizz from "@/components/GameQuizz";
import { View, Button, TouchableOpacity } from "react-native";
import globalStyles from "@/styles/globalStyles";
import { useRouter } from "expo-router";
import theme from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";

export default function GameQuizzScreen() {
  const router = useRouter();

  const handleFinishQuiz = () => {
    router.replace("/")
  };

  return (
    <View style={globalStyles.container}>
      <View style={{ position: "relative", width: "100%", }}>
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', marginTop: theme.spacing.xxlarge, zIndex: 10, marginLeft: theme.spacing.medium }}>
          <Ionicons name="chevron-back" size={40} color="white" />
        </TouchableOpacity>
      </View>
      <GameQuizz onFinish={handleFinishQuiz} />
    </View>
  );
}
