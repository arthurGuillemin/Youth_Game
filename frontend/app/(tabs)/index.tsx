import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import GameCard from "../../components/GameCard";
import ProfileButton from "../../components/ProfileButton";
import globalStyles from "../../styles/globalStyles";
import theme from "@/styles/theme";
import { getRewards } from "../../services/rewardService";
import { getImageUrl } from "../../services/imageService"; // Service d'images
import gameService from "../../services/gameService"; // Service pour récupérer les jeux
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [rewards, setRewards] = useState<{ id: string; title: string; image?: string }[]>([]);
  const [games, setGames] = useState<{ id: string; name: string; isMultiplayer: boolean }[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Récupérer les récompenses avec images
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

    // Récupérer les jeux
    const fetchGames = async () => {
      const data = await gameService.getAllGamesNames();
      if (data) {
        setGames(data);
      }
    };

    fetchRewards();
    fetchGames();
  }, []);

  return (
    <View style={[globalStyles.container, { flex: 1 }]}>
      <ProfileButton />
      <View style={{ marginTop: 100 }}>
        <Text style={[globalStyles.Title, { marginLeft: theme.spacing.medium }]}>Welcome</Text>
        <Text style={[globalStyles.Title, { marginLeft: theme.spacing.medium }]}>Back!</Text>
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <GameCard
          title="EU Quizz"
          textColor="#ffffff"
          variant="rectangle"
          image={require("../../assets/images/ReadyForAQuiz.png")}
        />
      </View>

      <Text style={globalStyles.Subtitle}>Reward</Text>

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

      <Text style={globalStyles.Subtitle}>Minigames</Text>

      <FlatList
        data={games}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <GameCard
            title={item.name}
            variant="square"
            onPress={() => router.push("/game")}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
}
