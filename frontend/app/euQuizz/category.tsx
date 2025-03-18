import { View, Text, FlatList } from "react-native";
import globalStyles from "../../styles/globalStyles";
import CategorySelect from "../../components/euQuizz/CategorySelect";

const categories = [
  { id: "1", title: "International Food", image: require("../../assets/images/food.jpg"), color: "#4aabff" },
  { id: "2", title: "Music and Culture", image: require("../../assets/images/music.jpg"), color: "#63dce0" },
  { id: "3", title: "International Food", image: require("../../assets/images/food.jpg"), color: "#4aabff" },
  { id: "4", title: "Music and Culture", image: require("../../assets/images/music.jpg"), color: "#63dce0" },

];

export default function CategorySelection() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.sectionTitle}>Categories</Text>

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
