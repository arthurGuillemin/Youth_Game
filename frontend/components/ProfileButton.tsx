import { TouchableOpacity, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";

export default function ProfileButton() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={globalStyles.profileButton}
      onPress={() => { router.push("/profile"); }}>
      <View>
        <Image source={require("../assets/images/avatar.png")} style={{ width: 50, height: 50 }} />
      </View>
    </TouchableOpacity>
  );
}
