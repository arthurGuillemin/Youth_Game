import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../../styles/globalStyles";
import CategorySelect from "../../components/euQuizz/CategorySelect";
import { useRouter } from "expo-router";

const categories = [
  { id: "1", title: "International Food", image: require("../../assets/images/food.jpg"), color: "#4aabff" },
  { id: "2", title: "Music and Culture", image: require("../../assets/images/music.jpg"), color: "#63dce0" },
  { id: "3", title: "International Food", image: require("../../assets/images/food.jpg"), color: "#4aabff" },
  { id: "4", title: "Music and Culture", image: require("../../assets/images/music.jpg"), color: "#63dce0" },

];

export default function CategorySelection() {
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerWithGoBack}>
        <TouchableOpacity onPress={() => router.back()} style={globalStyles.goBackButton}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={globalStyles.sectionTitle}>Categories</Text>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategorySelect id={item.id} title={item.title} image={item.image} color={item.color} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
