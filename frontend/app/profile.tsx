import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import ProfileCard from '@/components/ProfileCard';
import { getUser } from '../services/userService';
import { getUserStats } from '../services/playerStatsService';
import { getAchievementsByUser } from '../services/achievementsService';
import globalStyles from '@/styles/globalStyles';

const USER_ID = "c83b94c4-1aec-45e2-8c36-c1df039159f6";

interface AchievementCardProps {
  icon: React.ComponentType<{ name: string; size: number; color: string }>;
  iconName: string;
  size: number;
  color: string;
  text: string;
}

interface StatCardProps {
  icon: React.ComponentType<{ name: string; size: number; color: string }>;
  iconName: string;
  size: number;
  text: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, iconName, size, text, value }) => (
  <View style={styles.statCard}>
    <Icon name={iconName} size={size} color="white" />
    <View style={styles.statCardText}>
      <Text style={styles.statTextDays}>{value}</Text>
      <Text style={styles.statText}>{text}</Text>
    </View>
  </View>
);

const AchievementCard: React.FC<AchievementCardProps> = ({ icon: Icon, iconName, size, color, text }) => (
  <View style={styles.achievementCard}>
    <Icon name={iconName} size={size} color={color} />
    <Text style={styles.achievementText}>{text}</Text>
  </View>
);

const Profile = () => {
  const router = useRouter();

  const [user, setUser] = useState<{ username: string } | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [achievements, setAchievements] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser(USER_ID);
        const userStats = await getUserStats(USER_ID);
        const userAchievements = await getAchievementsByUser(USER_ID);

        setUser(userData);
        setStats(userStats.length ? userStats[0] : null);
        setAchievements(userAchievements);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[globalStyles.header, { marginBottom: -90 }]}>
        <TouchableOpacity onPress={() => router.back()} style={globalStyles.goBackButton}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ProfileCard
        username={user?.username || "User"}
        score={stats?.total_points || 0}
        highScore={stats?.highest_score || 0}
      />

      <View>
        <View style={styles.achievementsContainer}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <TouchableOpacity onPress={() => router.push("../achievement")}>
            <Text style={styles.buttonAllAchievements}>Show all achievements</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.achievements}>
          {achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id || index}
                icon={FontAwesome}
                iconName="trophy"
                size={30}
                color="#FFD700"
                text={achievement.achievement_name}
              />
            ))
          ) : (
            <Text style={styles.noAchievementsText}>No achievements yet</Text>
          )}
        </View>
      </View>

      <Text style={styles.sectionTitle}>Statistics</Text>
      <View style={styles.statistics}>
        <StatCard icon={FontAwesome5} iconName="medal" size={24} text="Total Points" value={stats?.total_points || 0} />
        <StatCard icon={MaterialIcons} iconName="games" size={34} text="Games Played" value={stats?.games_played || 0} />
        <StatCard icon={FontAwesome6} iconName="fire-flame-curved" size={24} text="Highest Score" value={stats?.highest_score || 0} />
        <StatCard icon={AntDesign} iconName="heart" size={24} text="Average Score" value={stats?.average_score || 0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111d45',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
  },
  buttonAllAchievements: {
    color: '#fff',
    fontSize: 14,
  },
  achievementsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  achievements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievementCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementText: {
    textAlign: 'center',
  },
  noAchievementsText: {
    color: '#ccc',
    textAlign: 'center',
  },
  statistics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#111d45',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
  statCardText: {
    marginLeft: 20,
  },
  statText: {
    color: '#fff',
  },
  statTextDays: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
