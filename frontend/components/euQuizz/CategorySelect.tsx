import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { useRouter } from "expo-router";

const defaultImages: { [key: string]: any } = {
  Food: require("../../assets/images/food.jpg"),
  Culture: require("../../assets/images/music.jpg"),
};

const defaultColors: { [key: string]: string } = {
  Food: "#4aabff",
  Culture: "#63dce0",
};

interface CategorySelectProps {
  title: string;
  showPlayButton?: boolean;
  image: string;
  color: string;
}

export default function CategorySelect({ title, showPlayButton = true, image, color }: CategorySelectProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/euQuizz/difficulty",
      params: {
        title: title,
        image: defaultImages[title] ? title : "Food",
        color: defaultColors[title] || "#4aabff",
      },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={euQuizzStyles.categoryCard}>
      <ImageBackground source={defaultImages[title] || require("../../assets/images/food.jpg")} style={euQuizzStyles.categoryImage}>
      {showPlayButton && (
        <View style={euQuizzStyles.categoryImageOverlay}>
          <Text style={euQuizzStyles.categoryTitle}>{title}</Text>
        </View>
        )}
      </ImageBackground>

      <View style={[euQuizzStyles.categoryOverlay, { backgroundColor: defaultColors[title] || "#4aabff", alignItems: showPlayButton ? "flex-end" : "flex-start" }]}>
        {!showPlayButton ? (
          <Text style={euQuizzStyles.categoryTitle}>{title}</Text>
        ) : (
          <TouchableOpacity style={euQuizzStyles.playButton} onPress={handlePress}>
            <Text style={euQuizzStyles.playButtonText}>Play</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
