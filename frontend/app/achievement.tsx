import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import globalStyles from "../styles/globalStyles";
import { FontAwesome, FontAwesome5, AntDesign, SimpleLineIcons, Entypo, Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '@/styles/theme';

const achievements = [
  { icon: FontAwesome, iconName: "trophy", color: "#FFD700", text: "Champion", isGray: false },
  { icon: FontAwesome, iconName: "diamond", color: "#00D8FF", text: "Logged in 50 times", isGray: true },
  { icon: SimpleLineIcons, iconName: "fire", color: "#FF9C00", text: "Triple Daily Login", isGray: true },
  { icon: AntDesign, iconName: "check", color: "#31BF00", text: "Completed 50 Quizzes", isGray: true },
  { icon: MaterialCommunityIcons, iconName: "calendar-check", color: "#FFD700", text: "100-Day Streak", isGray: true },
  { icon: FontAwesome5, iconName: "trophy", color: "#FF4500", text: "Completed 100 Quizzes", isGray: true },
  { icon: Ionicons, iconName: "flash", color: "#FFEA00", text: "Quiz in <30s", isGray: true },
  { icon: Entypo, iconName: "book", color: "#4287f5", text: "Read 10 Articles", isGray: true },
  { icon: FontAwesome, iconName: "star-half", color: "#8A2BE2", text: "50% Completion", isGray: true },
  { icon: MaterialIcons, iconName: "build", color: "#4CAF50", text: "10 Quizzes in a Day", isGray: true },
];

const AchievementList = () => {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.header, { marginBottom: -90, backgroundColor: theme.colors.background, zIndex: 10, height: 100 }]}>
        <TouchableOpacity onPress={() => router.back()} style={[globalStyles.goBackButton, { marginLeft: theme.spacing.medium }]}>
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[styles.title, { marginTop: 40, backgroundColor: theme.colors.background }]}>Achievements</Text>
      </View>

      <FlatList
        data={achievements}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ padding: theme.spacing.medium, marginTop: theme.spacing.xxlarge }}
        renderItem={({ item }) => (
          <AchievementCard
            icon={item.icon}
            iconName={item.iconName}
            color={item.color}
            text={item.text}
            isGray={item.isGray}
          />
        )}
      />
    </View>
  );
};

const AchievementCard = ({ icon: Icon, iconName, color, text, isGray }) => {
  return (
    <View style={[styles.achievementCard, { backgroundColor: isGray ? "rgba(255, 255, 255, 0.38)" : "rgb(255, 255, 255)" }]}>
      <Icon name={iconName} size={40} color={color} />
      <Text style={styles.achievementText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.medium,
    marginTop: theme.spacing.xxlarge,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    margin: 20,
  },
  achievementCard: {
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: theme.spacing.small,
    marginVertical: theme.spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    gap: 20,
  },
  achievementText: {
    textAlign: 'center',
  },
});

export default AchievementList;
