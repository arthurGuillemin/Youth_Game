import { View, Text } from "react-native";
import globalStyles from "../styles/globalStyles";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

interface HeaderProps {
  title: string;
  subtitle: string;
  showProfileCard?: boolean;
  showSearchBar?: boolean;
}

export default function Header({ title, subtitle, showProfileCard = false, showSearchBar = false }: HeaderProps) {
  return (
    <>
      <View style={[globalStyles.header, showSearchBar && globalStyles.headerWithSearch]}>
        <Text style={globalStyles.headerTitle}>{title}</Text>
        <Text style={globalStyles.headerSubtitle}>{subtitle}</Text>
        {showProfileCard && <ProfileCard />}
      </View>

      {showSearchBar && (
        <View style={globalStyles.searchWrapper}>
          <SearchBar onSearch={(query) => console.log("Recherche :", query)} />
        </View>
      )}
    </>
  );
}
