import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import CategorySelect from "../../components/euQuizz/CategorySelect";
import { getCategories } from "../../services/euQuizService";
import globalStyles from "../../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function CategorySelection() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      if (data && data.length > 0) {
        setCategories(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.headerWithGoBack}>
        <Text style={globalStyles.sectionTitle}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategorySelect title={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
