import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import theme from "../styles/theme";

interface ProfileCardProps {
  showExtraStats?: boolean; // Ajout d'une prop pour afficher ou non les stats supplémentaires
}

export default function ProfileCard({ showExtraStats = false }: ProfileCardProps) {
  return (
    <View style={globalStyles.profileCard}>
      {/* Image + Nom + Pays */}
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

      {/* Statistiques principales */}
      <View style={globalStyles.statsContainer}>
        <View style={globalStyles.statsBox}>
          <Ionicons name="trophy-outline" size={16} style={globalStyles.statsIcon} />
          <Text style={globalStyles.statsText}>0 000 pts</Text>
        </View>
        <View style={globalStyles.statsBox}>
          <Ionicons name="podium-outline" size={16} style={globalStyles.statsIcon} />
          <Text style={globalStyles.statsText}>21th</Text>
        </View>
      </View>

      {/* Statistiques supplémentaires si `showExtraStats` est vrai */}
      {showExtraStats && (
        <View style={globalStyles.statsContainer}>
          <View style={globalStyles.statsBox}>
            <Ionicons name="cash-outline" size={16} style={globalStyles.statsIcon} />
            <Text style={globalStyles.statsText}>0 000 €</Text>
          </View>
          <View style={globalStyles.statsBox}>
            <Ionicons name="chess-outline" size={16} style={globalStyles.statsIcon} />
            <Text style={globalStyles.statsText}>00 games</Text>
          </View>
        </View>
      )}
    </View>
  );
}
