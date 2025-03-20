import { View, Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import euQuizzStyles from "../../styles/euQuizzStyles";
import CategorySelect from "@/components/euQuizz/CategorySelect";
import DifficultySelect from "@/components/euQuizz/DifficultySelect";
import theme from "@/styles/theme";
import { useRouter } from "expo-router";

const difficulties = [
  { points: 100, color: "#4aabff" },
  { points: 300, color: "#56c2e3" },
  { points: 500, color: "#63dce0" },
];

export default function DifficultySelection() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const selectedCategory = {
    title: Array.isArray(params.title) ? params.title[0] : params.title || "Unknown",
    image: params.image || require("../../assets/images/food.jpg"),
    color: Array.isArray(params.color) ? params.color[0] : params.color || "#4aabff",
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerWithGoBack}>
        <Text style={globalStyles.sectionTitle}>Difficulty</Text>
      </View>

      {selectedCategory && (
        <CategorySelect title={selectedCategory.title} image={selectedCategory.image} color={selectedCategory.color} showPlayButton={false} />
      )}
      <FlatList
        data={difficulties}
        keyExtractor={(item) => item.points.toString()}
        renderItem={({ item }) => <DifficultySelect points={item.points} color={item.color} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: theme.spacing.xxlarge }}
      />
    </View>
  );
}
