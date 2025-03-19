import { View, Text } from "react-native";
import rankingStyles from "../styles/RankingStyles";
import theme from "@/styles/theme";

interface RankingTabProps {
  title: string;
  data: { name: string; points: string; country?: string }[];
}

export default function RankingTab({ title, data }: RankingTabProps) {
  return (
    <View style={{margin: theme.spacing.medium}}>
      <Text style={rankingStyles.rankSectionTitle}>{title}</Text>
      {data.slice(0, 3).map((item, index) => (
        <View key={`${title}-${index}`} style={rankingStyles.rankItem}>
          <Text style={rankingStyles.rankPosition}>{index + 1}.</Text>
          <View>
            <Text style={rankingStyles.rankName}>{item.name}</Text>
            <Text style={rankingStyles.rankCountry}>🇩🇪 {item.country || "Unknown"}</Text>
          </View>
          <Text style={rankingStyles.rankPoints}>{item.points}</Text>
        </View>
      ))}
    </View>
  );
}

