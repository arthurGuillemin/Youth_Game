import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import theme from "@/styles/theme";
import { getRewards, getRewardDetails } from "../../services/rewardService";
import { getImageUrl } from "../../services/imageService";
import { getUser } from "../../services/userService"; // Import du service utilisateur

// Définition des types
interface Reward {
  id: string;
  title: string;
  requiredPoints: number;
  image?: string;
  cost?: number; // Ajout du prix du reward
}

interface User {
  id: string;
  username: string;
  email: string;
  country: string;
  currency: number;
}

const userId = "c83b94c4-1aec-45e2-8c36-c1df039159f6"; // À remplacer dynamiquement si besoin

export default function RewardScreen() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const fetchRewardsAndUserData = async () => {
      try {
        // Récupération des récompenses
        const rewardsData: Reward[] | null = await getRewards();
        if (rewardsData) {
          const rewardsWithDetails = await Promise.all(
            rewardsData.map(async (reward) => {
              const imageUrl = await getImageUrl(reward.title);
              const details = await getRewardDetails(reward.id); // Récupération du coût
              return {
                ...reward,
                image: imageUrl,
              };
            })
          );
          setRewards(rewardsWithDetails);
        }

        // Récupération des points utilisateur
        const userData: User | null = await getUser(userId);
        if (userData) {
          setUserPoints(userData.currency);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchRewardsAndUserData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.Title, { marginTop: theme.spacing.xxlarge, marginLeft: theme.spacing.medium }]}>
        Rewards
      </Text>
      <Text style={styles.textpoints}>Your points: {userPoints}</Text>

      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const progress = userPoints / item.requiredPoints;

          return (
            <TouchableOpacity onPress={() => router.push({ pathname: "/rewardInfo", params: item })}>
              <View style={styles.card}>
                {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarWrapper}>
                    <View style={[styles.progressBar, { width: `${Math.min(progress * 100, 100)}%` }]} />
                  </View>
                  <Text style={styles.progressText}>
                    {userPoints} / {item.cost}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4BABFF",
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 15,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  textpoints: {
    color: "white",
    fontSize: 14,
    alignSelf: "flex-end",
    marginHorizontal: 15,
  },
  costText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  progressBarContainer: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  progressText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginVertical: 5,
    alignSelf: "flex-end",
  },
  progressBarWrapper: {
    width: "100%",
    height: 15,
    backgroundColor: "black",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: "#fff",
    borderWidth: 2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
  },
});
