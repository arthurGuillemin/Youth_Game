import { useState } from "react";
import { View, FlatList } from "react-native";
import globalStyles from "../../styles/globalStyles";
import TabSwitcher from "../../components/TabSwitcher";
import SimpleCard from "../../components/SimpleCard";

export default function RankingScreen() {
  const [selectedTab, setSelectedTab] = useState("National");

  const tabs = [
    { key: "National", label: "NATIONAL" },
    { key: "Europe", label: "EUROPE" },
  ];

  const rankingData = [
    { name: "Name", points: "0 000 pts" },
    { name: "Name", points: "0 000 pts" },
    { name: "Name", points: "0 000 pts" },
    { name: "Name", points: "0 000 pts" },
    { name: "Name", points: "0 000 pts" },
  ];

  return (
    <View style={globalStyles.container}>

      <TabSwitcher tabs={tabs} selectedTab={selectedTab} onSelectTab={setSelectedTab} />

      <FlatList
        data={rankingData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <SimpleCard title={item.name} subtitle={item.points} />}
        contentContainerStyle={globalStyles.rankingList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
