import { View, Text } from "react-native";
import rankingStyles from "../styles/RankingStyles";
import theme from "@/styles/theme";

interface RankingTabProps {
  title: string;
  data: { name: string; points: string; country?: string }[];
  countryFlags: { [key: string]: string };
}

// Fonction pour récupérer le bon drapeau
const getCountryFlag = (country: string | undefined, countryFlags: { [key: string]: string }) => {
  if (!country) return "🏳"; // Drapeau blanc si inconnu
  const formattedCountry = country.replace(/\s+/g, "");
  return countryFlags[formattedCountry] || "🏳";
  
};

export default function RankingTab({ title, data, countryFlags }: RankingTabProps) {
  return (
    <View style={{ margin: theme.spacing.medium }}>
      <Text style={rankingStyles.rankSectionTitle}>{title}</Text>
      {data.slice(0, 3).map((item, index) => (
        <View key={`${title}-${index}`} style={rankingStyles.rankItem}>
          <Text style={rankingStyles.rankPosition}>{index + 1}.</Text>
          <View>
            <Text style={rankingStyles.rankName}>{item.name}</Text>
            <Text style={rankingStyles.rankCountry}>
              {getCountryFlag(item.country, countryFlags)} {item.country || "Unknown"}
            </Text>
          </View>
          <Text style={rankingStyles.rankPoints}>{item.points}</Text>
        </View>
      ))}
    </View>
  );
}
