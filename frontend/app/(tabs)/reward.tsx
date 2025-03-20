import RewardButton from "../../components/RewardButton";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "../../styles/globalStyles";
import theme from "@/styles/theme";

const rewards = [
  {
    title: "TOO GOOD TO GO",
    image: require("../../assets/images/tooGoodToGo.png"),
    points: 2350,
    requiredPoints: 5500,
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt neque totam maiores ipsa maxime mollitia perspiciatis dolore magni fuga reprehenderit, voluptatem dolorum, velit deleniti rerum, enim in laborum odit quo?"
  },
  {
    title: "Hello FRESH",
    image: require("../../assets/images/helloFresh.png"),
    points: 2350,
    requiredPoints: 10000,
    description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt neque totam maiores ipsa maxime mollitia perspiciatis dolore magni fuga reprehenderit, voluptatem dolorum, velit deleniti rerum, enim in laborum odit quo?"
  },
];

export default function RewardScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.Title, {marginTop: theme.spacing.xxlarge, marginLeft:theme.spacing.medium}]}>Rewards</Text>
      <Text style={styles.textpoints}> Your points : {rewards[0].points}</Text>
      <FlatList
        data={rewards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const progress = item.points / item.requiredPoints;

          return (
            <TouchableOpacity onPress={() => router.push({ pathname: "/rewardInfo", params: item })}>
              <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.progressBarContainer}>
                  <View style={styles.progressBarWrapper}>
                    <View 
                      style={[styles.progressBar, { width: `${progress * 100}%` }]} 
                    />
                  </View>
                  <Text style={styles.progressText}>
                    {item.points} / {item.requiredPoints}
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
    marginHorizontal: 10

  },
  textpoints: {
    color: "white",
    fontSize: 14,
    alignSelf: 'flex-end',
    marginHorizontal: 15
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
    alignSelf: 'flex-end',
  },
  progressBarWrapper: {
    width: "100%",
    height: 15,
    backgroundColor: "black",
    borderRadius: 20,
    overflow: "hidden",
    borderColor: '#fff',
    borderWidth:2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
  },
});
