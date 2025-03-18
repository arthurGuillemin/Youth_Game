import { Text, TouchableOpacity } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { useRouter } from "expo-router";

interface DifficultySelectProps {
  points: number;
  color: string;
}

export default function DifficultySelect({ points, color }: DifficultySelectProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "/euQuizz/questions", params: { difficulty: points } });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[euQuizzStyles.difficultyButton, { backgroundColor: color }]}>
      <Text style={euQuizzStyles.difficultyText}>{points} pts</Text>
    </TouchableOpacity>
  );
}
