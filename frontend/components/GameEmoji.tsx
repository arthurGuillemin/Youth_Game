import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getRandomGuess } from "../services/emojiGuess.js";
import { createScore } from "../services/scoreService"; // 🔥 Import de la fonction pour enregistrer le score
import theme from "@/styles/theme";
import { getUser } from '../services/userService';

const USER_ID = "c83b94c4-1aec-45e2-8c36-c1df039159f6"; // Remplace par l'ID de l'utilisateur

const GameEmoji = () => {
  const [country, setCountry] = useState<any>(null);
  const [input, setInput] = useState("");
  const [emojiIndex, setEmojiIndex] = useState(1);
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const randomGuess = await getRandomGuess();
      if (randomGuess && randomGuess.length > 0) {
        setCountry(randomGuess[0]);
      }
    };

    fetchData();
  }, []);

  const checkAnswer = async () => {
    if (!country) return;

    let points = 0;

    if (input.trim().toLowerCase() === country.correct_answer.toLowerCase()) {
      points = 100; 
      setMessage("Bravo ! Vous avez trouvé !");
      Alert.alert("Félicitations !", `La bonne réponse est ${country.correct_answer}`, [
        {
          text: "OK",
          onPress: () => {
            setTimeout(() => {
              router.back();
            }, 200);
          },
        },
      ]);
    } else {
      if (emojiIndex < country.emojis.emojis.length) {
        setEmojiIndex(emojiIndex + 1);
        setMessage("Incorrect, essayez encore !");
      } else {
        setMessage(`Perdu ! La bonne réponse était ${country.correct_answer}`);
      }
    }

    const user = await getUser(USER_ID);
    const userName = user ? user.username : "Unknown";

    await createScore({
      user_id: USER_ID,
      game_id: "e39f9f00-94e7-4e7e-bf24-f4df1b6c611d", 
      points: points,
    });

    setInput("");
    router.push({ pathname: "/euQuizz/result2", params: { score : points, name: userName } });

  };

  return (
    <View style={styles.container}>
      {country ? (
        <>
          <Text style={styles.emoji}>{country.emojis.emojis.slice(0, emojiIndex).join(" ")}</Text>
          <TextInput
            style={styles.input}
            placeholder="Devinez le pays"
            value={input}
            onChangeText={setInput}
          />
          <Button title="Valider" onPress={checkAnswer} />
          <Text style={styles.message}>{message}</Text>
        </>
      ) : (
        <Text>Chargement...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ecf0f1",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: "80%",
    fontSize: 18,
    backgroundColor: "#fff",
  },
  message: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#ecf0f1",
    textAlign: "center",
  },
});

export default GameEmoji;
