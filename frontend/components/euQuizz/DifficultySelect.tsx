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


  const category = params.title || "Unknown";

  const handlePress = () => {

    router.push({ pathname: "/euQuizz/questions", params: { category : category } });

  return (
    <TouchableOpacity onPress={handlePress} style={[euQuizzStyles.difficultyButton, { backgroundColor: color }]}>
      <Text style={euQuizzStyles.difficultyText}>{points}</Text>
    </TouchableOpacity>
  );
}
}