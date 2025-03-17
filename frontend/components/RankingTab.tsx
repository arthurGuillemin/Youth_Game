import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

export default function RankingTab({ selectedTab, setSelectedTab }) {
  return (
    <View style={{ flexDirection: "row", marginVertical: theme.spacing.medium }}>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedTab === "National" ? theme.colors.accent : theme.colors.secondary,
          padding: theme.spacing.small,
          borderTopLeftRadius: theme.borderRadius.medium,
          borderBottomLeftRadius: theme.borderRadius.medium,
        }}
        onPress={() => setSelectedTab("National")}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>NATIONAL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: selectedTab === "Europe" ? theme.colors.accent : theme.colors.secondary,
          padding: theme.spacing.small,
          borderTopRightRadius: theme.borderRadius.medium,
          borderBottomRightRadius: theme.borderRadius.medium,
        }}
        onPress={() => setSelectedTab("Europe")}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>EUROPE</Text>
      </TouchableOpacity>
    </View>
  );
}
