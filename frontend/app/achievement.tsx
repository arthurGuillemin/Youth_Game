import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";
import { FontAwesome, FontAwesome5, AntDesign, SimpleLineIcons, Entypo, Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '@/styles/theme';

const achievements = [
  { icon: FontAwesome, iconName: "diamond", color: "#00D8FF", text: "Logged in 50 times" },
  { icon: SimpleLineIcons, iconName: "fire", color: "#FF9C00", text: "Triple Daily Login" },
  { icon: AntDesign, iconName: "check", color: "#31BF00", text: "Completed 50 Quizzes" },
  { icon: MaterialCommunityIcons, iconName: "calendar-check", color: "#FFD700", text: "100-Day Streak" },
  { icon: FontAwesome5, iconName: "trophy", color: "#FF4500", text: "Completed 100 Quizzes" },
  { icon: Ionicons, iconName: "flash", color: "#FFEA00", text: "Quiz in <30s" },
  { icon: Entypo, iconName: "book", color: "#4287f5", text: "Read 10 Articles" },
  { icon: FontAwesome, iconName: "star-half", color: "#8A2BE2", text: "50% Completion" },
  { icon: MaterialIcons, iconName: "build", color: "#4CAF50", text: "10 Quizzes in a Day" },
  { icon: FontAwesome5, iconName: "medal", color: "#DAA520", text: "Perfect Score x5" },
  { icon: FontAwesome5, iconName: "fire-alt", color: "#FF4500", text: "200-Day Streak" },
  { icon: Feather, iconName: "users", color: "#FF69B4", text: "Referred 5 Friends" },
  { icon: MaterialIcons, iconName: "psychology", color: "#9C27B0", text: "90%+ Avg Score" },
  { icon: FontAwesome5, iconName: "bullseye", color: "#D32F2F", text: "10 Perfect Scores" },
  { icon: Ionicons, iconName: "stopwatch", color: "#FF6F00", text: "Quiz in <15s" },
  { icon: MaterialCommunityIcons, iconName: "moon-waning-crescent", color: "#673AB7", text: "Quiz at 3 AM" },
  { icon: MaterialCommunityIcons, iconName: "weather-sunset-up", color: "#FF9800", text: "Quiz before 6 AM" },
  { icon: FontAwesome5, iconName: "crown", color: "#FFD700", text: "100 Perfect Quizzes" },
  { icon: Ionicons, iconName: "globe", color: "#03A9F4", text: "5 Categories Explored" },
  { icon: FontAwesome5, iconName: "running", color: "#FF5722", text: "10 Quizzes in a Row" }
];

const AchievementList = () => {
  const router = useRouter();
  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.header, { marginBottom: -90, backgroundColor: theme.colors.background, zIndex: 10, height:100 }]}>
        <TouchableOpacity onPress={() => router.back()} style={[globalStyles.goBackButton, {marginLeft: theme.spacing.medium}]}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[styles.title, { marginTop: 40, backgroundColor: theme.colors.background }]}>Achievements</Text>
      </View>
      <FlatList
        data={achievements}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: theme.spacing.medium,marginTop: theme.spacing.xxlarge}}
        renderItem={({ item }) => (
          <View style={styles.achievementCard}>
            <item.icon name={item.iconName} size={40} color={item.color} />
            <Text style={styles.achievementText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    marginTop: theme.spacing.xxlarge
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    margin: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
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
    marginHorizontal: theme.spacing.small,
    marginVertical: theme.spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    gap: 20
  },
  achievementIcon: {
    marginBottom: 10,
  },
  achievementText: {
    textAlign: 'center',
  },
});

export default AchievementList;