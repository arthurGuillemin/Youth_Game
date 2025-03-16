import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

interface ProfileCardProps {
  showExtraStats?: boolean;
}

export default function ProfileCard({ showExtraStats = false }: ProfileCardProps) {
  return (
    <View style={globalStyles.profileCard}>
      <View style={globalStyles.profileHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={globalStyles.profileImage}
        />
        <View style={globalStyles.profileInfo}>
          <Text style={globalStyles.profileUsername}>Name</Text>
          <Text style={globalStyles.profileCountry}>
            <Ionicons name="location-outline" size={14} /> Country
          </Text>
        </View>
      </View>

      <View style={globalStyles.statsContainer}>
        <View style={globalStyles.statsBox}>
          <Ionicons name="trophy-outline" size={16} />
          <Text>0 000 pts</Text>
        </View>
        <View style={globalStyles.statsBox}>
          <Ionicons name="podium-outline" size={16} />
          <Text>21th</Text>
        </View>
      </View>

      {showExtraStats && (
        <View style={globalStyles.statsContainer}>
          <View style={globalStyles.statsBox}>
            <Ionicons name="cash-outline" size={16} />
            <Text>0 000 €</Text>
          </View>
          <View style={globalStyles.statsBox}>
            <Ionicons name="chess-outline" size={16} />
            <Text>00 games</Text>
          </View>
        </View>
      )}
    </View>
  );
}
