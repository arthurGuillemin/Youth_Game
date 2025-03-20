import { View, Text, ActivityIndicator } from "react-native";
import globalStyles from "../styles/globalStyles";
import euQuizzStyles from "../styles/euQuizzStyles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import theme from "@/styles/theme";

export default function LobbyScreen() {
  const router = useRouter();
  const [players, setPlayers] = useState([
    { id: 1, country: "🇫🇷" },
    { id: 2, country: "🇩🇪" },
  ]);
  const [currentPlayers, setCurrentPlayers] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPlayers < players.length) {
        setCurrentPlayers((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          router.push("/euQuizz/category");
        }, 2000);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [currentPlayers, players.length, router]);

  return (
    <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Text style={globalStyles.Title}>Finding</Text>
      <Text style={[globalStyles.Title, {marginBottom: theme.spacing.medium}]}>Participants</Text>
      <Text style={[globalStyles.Subtitle, {textAlign: 'center', marginLeft:0}]}>{currentPlayers}/2</Text>


      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        {players.map((player, index) => (
          <Ionicons
            key={player.id}
            name="person-circle-outline"
            size={50}
            color={index < currentPlayers ? "white" : "gray"}
          />
        ))}
      </View>

      <View style={{ flexDirection: "row", gap: 50, marginTop: 10 }}>
        {players.slice(0, currentPlayers).map((player) => (
          <Text key={player.id} style={{ fontSize: 20 }}>{player.country}</Text>
        ))}
      </View>

      {currentPlayers < 2 && <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />}

      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Text style={[globalStyles.Subtitle, {marginLeft: 0}]}>Did you know?</Text>
        <Text style={{ color: "white", textAlign: "center", maxWidth: 250 }}>
          Even though Germany is famous for beer, Germans actually drink more coffee!
        </Text>
      </View>
    </View>
  );
}
