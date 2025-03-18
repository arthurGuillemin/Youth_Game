import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { useRouter } from "expo-router";

interface CategorySelectProps {
  id: string;
  title: string;
  image: any;
  color: string;
  showPlayButton?: boolean;
}

export default function CategorySelect({ id, title, image, color, showPlayButton = true }: CategorySelectProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "/euQuizz/difficulty", params: { category: id } });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={euQuizzStyles.categoryCard}>
      <ImageBackground source={image} style={euQuizzStyles.categoryImage}>
        {showPlayButton && (
          <View style={euQuizzStyles.categoryImageOverlay}>
            <Text style={euQuizzStyles.categoryTitle}>{title}</Text>
          </View>
        )}
      </ImageBackground>

      <View style={[euQuizzStyles.categoryOverlay, { backgroundColor: color, alignItems: showPlayButton ? "flex-end" : "flex-start" }]}>
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
