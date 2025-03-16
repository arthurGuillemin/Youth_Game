import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";
import ProfileCard from "./ProfileCard";
import SearchBar from "./SearchBar";

interface HeaderProps {
  title: string;
  subtitle: string;
  showProfileCard?: boolean;
  showSearchBar?: boolean;
  rightIcon?: "settings" | "none";
  showExtraStats?: boolean;
  showGoBack?: boolean;
}

export default function Header({ title, subtitle, showProfileCard = false, showSearchBar = false, rightIcon, showExtraStats = false, showGoBack = false, }: HeaderProps) {
  const router = useRouter();
  return (
    <>
      <View style={[globalStyles.header, showSearchBar && globalStyles.headerWithSearch]}>
        {showGoBack && (
          <TouchableOpacity
            style={globalStyles.goBackButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back-outline" size={30} color="white" />
          </TouchableOpacity>
        )}
        <Text style={[globalStyles.headerTitle, showGoBack && globalStyles.headerTitleWithGoBack]}>
          {title}
        </Text>
        <Text style={[globalStyles.headerSubtitle, showGoBack && globalStyles.headerSubtitleWithGoBack]}>
          {subtitle}
        </Text>
        {rightIcon === "settings" && (
          <TouchableOpacity
            style={globalStyles.headerRightIcon}
            onPress={() => router.push("../settings")}
          >
            <Ionicons name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        )}

        {showProfileCard && <ProfileCard showExtraStats={showExtraStats} />}

      </View>

      {showSearchBar && (
        <View style={globalStyles.searchWrapper}>
          <SearchBar onSearch={(query) => console.log("Recherche :", query)} />
        </View>
      )}
    </>
  );
}
