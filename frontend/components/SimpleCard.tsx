import { View, Text, StyleSheet } from "react-native";
import globalStyles from "../styles/globalStyles";

interface SimpleCardProps {
  title: string;
  subtitle?: string;
  variant?: "ranking" | "game";
}

export default function SimpleCard({ title, subtitle, variant = "ranking" }: SimpleCardProps) {
  return (
    <View
      style={[
        globalStyles.simpleCard,
        variant === "game" && globalStyles.simpleCardGame,
      ]}
    >
      <Text style={[globalStyles.cardTitle, variant === "game" && globalStyles.cardTitleGame]}>
        {title}
      </Text>
      {subtitle && (
        <Text style={[globalStyles.cardSubtitle, variant === "game" && globalStyles.cardSubtitleGame]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
