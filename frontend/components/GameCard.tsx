import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";
import euQuizzStyles from "@/styles/euQuizzStyles";

interface GameCardProps {
  title: string;
  color?: string;
  textColor?: string;
  isMultiplayer?: boolean;
  variant?: "square" | "rectangle";
  image?: any;
  onPress?: () => void;
}

export default function GameCard({
  title,
  variant = "square",
  image,
  onPress
}: GameCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    if (title === "EU Quizz") {
      router.push("../euQuizz");
    } else if (title === "EmojiGame") {
      router.push("/game-emoji");
    } else if (title === "QuizzGame") {
      router.push("/game-quizz");
    }
  };

    return (
      <TouchableOpacity onPress={handlePress} style={[
        variant === "rectangle" ? globalStyles.gameCardRectangle : globalStyles.gameCardSquare,
      ]}>

      {image && (
        <Image source={image} style={globalStyles.gameImage} resizeMode="cover" />
      )}

      <View style={euQuizzStyles.categoryImageOverlay}>
        <Text style={euQuizzStyles.categoryTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}