import GameQuizz from "@/components/GameQuizz";
import { View, Button } from "react-native";
import globalStyles from "@/styles/globalStyles";
import { useRouter } from "expo-router";

export default function GameQuizzScreen() {
  const router = useRouter(); 

  const handleFinishQuiz = () => {
    router.back();
  };

  return (
    <View style={globalStyles.container}>
      <GameQuizz onFinish={handleFinishQuiz} />
      <Button title="Retour" onPress={() => router.back()} />
    </View>
  );
}
