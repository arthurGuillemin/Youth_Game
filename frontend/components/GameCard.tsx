import { Text, View, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

interface GameCardProps {
  title: string;
  color?: string;
  textColor?: string;
  isMultiplayer?: boolean;
  variant?: "square" | "rectangle";
  image?: any;
}

export default function GameCard({
  title,
  variant = "square",
  image
}: GameCardProps) {
  const router = useRouter();

  const handlePress = () => {
    if (title === "EU Quizz") {
      router.push("../euQuizz/category");
    } else if (title === "EmojiGame") {
      router.push("../game-emoji");
    } else if (title === "QuizzGame") {
      router.push("../game-quizz");
    }
  };

    return (
      <TouchableOpacity onPress={handlePress} style={[
        variant === "rectangle" ? globalStyles.gameCardRectangle : globalStyles.gameCardSquare,
      ]}>

      {image && (
        <Image source={image} style={globalStyles.gameImage} resizeMode="cover" />
      )}

      <View style={globalStyles.overlay}>
        <Text style={globalStyles.gameTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}