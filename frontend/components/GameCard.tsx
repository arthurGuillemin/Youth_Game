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

    switch (title) {
      case "EU Quiz":
        router.push("/euQuizz");
        break;
      case "EmojiGame":
        router.push("/game-emoji");
        break;
      case "Europa Trivia":
        router.push("/game-quizz");
        break;
      default:
        console.warn("No route found for this game or reward.");
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
