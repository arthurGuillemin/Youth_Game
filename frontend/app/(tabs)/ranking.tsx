import { useState } from "react";
import { View, ScrollView } from "react-native";
import globalStyles from "../../styles/globalStyles";
import RankingTab from "../../components/RankingTab";
import RankingItem from "../../components/RankingItem";
import Header from "@/components/Header";

export default function RankingScreen() {
  const [selectedTab, setSelectedTab] = useState("National");

  const rankingData = [
    { name: "Name", points: "0 000" },
    { name: "Name", points: "0 000" },
    { name: "Name", points: "0 000" },
    { name: "Name", points: "0 000" },
    { name: "Name", points: "0 000" },
  ];

  return (
    <ScrollView style={globalStyles.container}>

      <Header title="DISCOVER YOUR" subtitle="Rankings" showProfileCard={true} />
      <RankingTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <View>
        {rankingData.map((item, index) => (
          <RankingItem key={index} name={item.name} points={item.points} />
        ))}
      </View>
    </ScrollView>
  );
}
