import { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  const handleSearch = () => { if (query.trim() !== "") { onSearch(query)}};

  return (
    <View style={globalStyles.searchContainer}>
      <TextInput
        placeholder="Search a game ..."
        placeholderTextColor={theme.colors.muted}
        style={globalStyles.searchInput}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search-outline" size={20} color={theme.colors.highlight} />
      </TouchableOpacity>
    </View>
  );
}

