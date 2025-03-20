import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router"; 

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import ProfileCard from '@/components/ProfileCard';


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
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, iconName, size, text }) => (
  <View style={styles.statCard}>
    <Icon name={iconName} size={size} color="white" />
    <View style={styles.statCardText}>
      <Text style={styles.statTextDays}>1 day </Text>
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

  const achievements = [
    { icon: FontAwesome, iconName: "diamond", size: 30, color: "#00D8FF", text: "Logged in 50 times in a row" },
    { icon: SimpleLineIcons, iconName: "fire", size: 30, color: "#FF9C00", text: "Triple Daily Login" },
    { icon: AntDesign, iconName: "check", size: 30, color: "#31BF00", text: "Completed 50 Quizzes" }
  ];

  const statistics = [
    { icon: FontAwesome5, iconName: "medal", size: 24, text: "best streak" },
    { icon: MaterialIcons, iconName: "bolt", size: 34, text: "best streak" },
    { icon: FontAwesome6, iconName: "fire-flame-curved", size: 24, text: "best streak" },
    { icon: AntDesign, iconName: "heart", size: 24, text: "best streak" }
  ];

  return (
    <View style={styles.container}>
      <ProfileCard username="Kai" score={2100} highScore={500} />
      <View>
      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <TouchableOpacity  onPress={() => router.push("../achievement")}>
          <Text style={styles.buttonAllAchievements}>Show all achievements</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.achievements}>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </View>
      </View>
      <Text style={styles.sectionTitle}>Statistics</Text>
      <View style={styles.statistics}>
        {statistics.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
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
  header: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: '#fff',
    marginRight: 20,
    marginLeft: 20,
  },
  User:{
    flexDirection: 'row',
  },
  name: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  info: {
    color: '#ccc',
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
  achievementIcon: {
    marginBottom: 10,
  },
  achievementText: {
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
    borderWidth:1,
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