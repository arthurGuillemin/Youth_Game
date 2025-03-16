import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";
import ProfileCard from "./ProfileCard";

interface HeaderProps {
  title: string;
  subtitle: string;
  showProfileCard?: boolean;
}

export default function Header({ title, subtitle, showProfileCard = false }: HeaderProps) {
  return (
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>{title}</Text>
        <Text style={globalStyles.headerSubtitle}>{subtitle}</Text>
        {showProfileCard && <ProfileCard />}
      </View>

  );
}
