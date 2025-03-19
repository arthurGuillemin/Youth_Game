import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import euQuizzStyles from "../../styles/euQuizzStyles";
import CategorySelect from "@/components/euQuizz/CategorySelect";
import DifficultySelect from "@/components/euQuizz/DifficultySelect";
import theme from "@/styles/theme";
import { useRouter } from "expo-router";

const categories = [
  { id: "1", title: "International Food", image: require("../../assets/images/food.jpg"), color: "#5D9CEC" },
  { id: "2", title: "Music and Culture", image: require("../../assets/images/music.jpg"), color: "#6DD5FA" },
];

const difficulties = [
  { points: 100, color: "#4aabff" },
  { points: 200, color: "#4eb0f2" },
  { points: 300, color: "#56c2e3" },
  { points: 400, color: "#5dc8de" },
  { points: 500, color: "#63dce0" },
];

export default function DifficultySelection() {
  const { category } = useLocalSearchParams();
  const selectedCategory = categories.find((cat) => cat.id === category);
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerWithGoBack}>
        <TouchableOpacity onPress={() => router.back()} style={globalStyles.goBackButton}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={globalStyles.sectionTitle}>Difficulty</Text>
      </View>

      {selectedCategory && (
        <CategorySelect id={selectedCategory.id} title={selectedCategory.title} image={selectedCategory.image} color={selectedCategory.color} showPlayButton={false} />
      )}
      <FlatList
        data={difficulties}
        keyExtractor={(item) => item.points.toString()}
        renderItem={({ item }) => <DifficultySelect points={item.points} color={item.color} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: theme.spacing.xxlarge }}
      />
      <View style={euQuizzStyles.randomButton}>
        <Text style={euQuizzStyles.randomButtonText}>🎲 random</Text>
      </View>
    </View>
  );
}
