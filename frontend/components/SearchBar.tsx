import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function SearchBar() {
  return (
    <View style={globalStyles.searchContainer}>
      <TextInput
        placeholder="Search a game ..."
        placeholderTextColor={theme.colors.muted}
        style={globalStyles.searchInput}
      />
      <Ionicons name="search-outline" size={20} color={theme.colors.highlight} />
    </View>
  );
}
