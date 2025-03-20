import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import GameCard from "../../components/GameCard";
import ProfileButton from "../../components/ProfileButton";
import globalStyles from "../../styles/globalStyles";
import theme from "@/styles/theme";
import { getRewards } from "../../services/rewardService";
import { getImageUrl } from "../../services/imageService"; // Import du service d’images
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [rewards, setRewards] = useState<{ id: string; title: string; image?: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchRewards = async () => {
      const data = await getRewards();
      if (data) {
        const rewardsWithImages = await Promise.all(
          data.map(async (reward) => {
            const imageUrl = await getImageUrl(reward.title); 
            return { ...reward, image: imageUrl };
          })
        );
        setRewards(rewardsWithImages);
      }
    };
    fetchRewards();
  }, []);

  const games = [
    { id: "1", title: "Europa Trivia", isMultiplayer: true },
    { id: "2", title: "EmojiGame", isMultiplayer: false },
    { id: "3", title: "EU Quizz", isMultiplayer: false },
    { id: "4", title: "Comming soon", isMultiplayer: true },
    { id: "5", title: "Comming soon", isMultiplayer: false },
    { id: "6", title: "Comming soon", isMultiplayer: false },
  ];

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <ProfileButton />
      <View style={styles.logoContainer}>
  <Image source={require("../../assets/images/bigLogo.png")} style={styles.logo} />
</View>


      <View style={{ width: "100%", marginBottom: 20, marginTop: -40}}>
        <GameCard
          title="EU Quizz"
          textColor="#ffffff"
          variant="rectangle"
          image={require("../../assets/images/ReadyForAQuiz.png")}
        />
      </View>

      <Text style={globalStyles.Subtitle}>Rewards</Text>

      <FlatList
        data={rewards}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <GameCard
            title={item.title}
            variant="square"
            image={{ uri: item.image }}
            onPress={() => router.push("/rewardInfo")}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={globalStyles.Subtitle}>Mini Games</Text>

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard title={item.title} variant="square" />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
  };
  const styles = StyleSheet.create({
    logoContainer: {
      marginTop: 55,
      marginLeft: theme.spacing.medium
    },
    logo: {
      width: 200,
      height: 150,
      resizeMode: "contain",
    },
    });
