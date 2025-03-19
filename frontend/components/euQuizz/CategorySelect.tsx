import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { useRouter } from "expo-router";

const defaultImages: { [key: string]: any } = {
  Food: require("../../assets/images/food.jpg"),
  Music: require("../../assets/images/music.jpg"),
};

const defaultColors: { [key: string]: string } = {
  Food: "#4aabff",
  Music: "#63dce0",
};

interface CategorySelectProps {
  title: string;
}

export default function CategorySelect({ title }: CategorySelectProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "/euQuizz/difficulty", params: { category: title } });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={euQuizzStyles.categoryCard}>
      <ImageBackground source={defaultImages[title] || require("../../assets/images/food.jpg")} style={euQuizzStyles.categoryImage}>
        <View style={euQuizzStyles.categoryImageOverlay}>
          <Text style={euQuizzStyles.categoryTitle}>{title}</Text>
        </View>
      </ImageBackground>

      <View style={[euQuizzStyles.categoryOverlay, { backgroundColor: defaultColors[title] || "#4aabff", alignItems: "flex-end" }]}>
        <TouchableOpacity style={euQuizzStyles.playButton} onPress={handlePress}>
          <Text style={euQuizzStyles.playButtonText}>Play</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
