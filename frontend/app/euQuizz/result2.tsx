import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import euQuizzStyles from "../../styles/euQuizzStyles";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "@/styles/globalStyles";
import theme from "@/styles/theme";

export default function Result2Screen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.Title, { textAlign: "center", marginTop: 130, marginBottom: theme.spacing.xxlarge }]}>
        Results
      </Text>
      <View style={{ alignItems: "center", justifyContent: "center", marginVertical: theme.spacing.xxlarge }}>
        <Ionicons name="person-circle-outline" size={90} color="white" />
        <Text style={globalStyles.Title}>{params.name || "Unknown"}</Text>
        <Text style={globalStyles.Subtitle}>+ {params.score} pts</Text>
      </View>
      <TouchableOpacity
        style={euQuizzStyles.nextButton}
        onPress={() => router.push("../(tabs)")}
      >
        <Text style={euQuizzStyles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
