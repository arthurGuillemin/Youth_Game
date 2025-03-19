import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import CategorySelect from "../../components/euQuizz/CategorySelect";
import { getCategories } from "../../services/euQuizService";
import globalStyles from "../../styles/globalStyles";

export default function CategorySelection() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

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
      <Text style={globalStyles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item} 
        renderItem={({ item }) => <CategorySelect title={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
