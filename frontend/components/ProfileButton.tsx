import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function ProfileButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={globalStyles.profileButton}
      onPress={() => router.push("/profile")}
    >
      <View style={globalStyles.profileIconContainer}>
        <Ionicons name="person-outline" size={40} color="white" />
      </View>
    </TouchableOpacity>
  );
}
