import { Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { useRouter } from "expo-router";

interface DifficultySelectProps {
  points: number;
  color: string;
}

export default function DifficultySelect({ points, color }: DifficultySelectProps) {
  const params = useLocalSearchParams();
  const router = useRouter();

  // 🔥 Correction : Récupérer la catégorie depuis les paramètres
  const category = params.title || "Unknown"; 

  // 🔥 Correction : Transmettre la catégorie en plus de la difficulté
  const handlePress = () => {
    router.push({ pathname: "/euQuizz/questions", params: { category : category, difficulty: name } });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[euQuizzStyles.difficultyButton, { backgroundColor: color }]}>
      <Text style={euQuizzStyles.difficultyText}>{points}</Text>
    </TouchableOpacity>
  );
}
