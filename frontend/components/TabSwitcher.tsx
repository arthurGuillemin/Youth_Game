import { View, TouchableOpacity, Text } from "react-native";
import globalStyles from "../styles/globalStyles";

interface TabSwitcherProps {
  tabs: { key: string; label: string }[];
  selectedTab: string;
  onSelectTab: (tabKey: string) => void;
}

export default function TabSwitcher({ tabs, selectedTab, onSelectTab }: TabSwitcherProps) {
  return (
    <View style={globalStyles.rankingTabs}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[
            globalStyles.tabButton,
            selectedTab === tab.key && globalStyles.activeTab,
          ]}
          onPress={() => onSelectTab(tab.key)}
        >
          <Text
            style={[
              globalStyles.tabText,
              selectedTab === tab.key && globalStyles.activeTabText,
            ]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
