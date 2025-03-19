import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getRandomGuess } from "../services/emojiGuess.js";

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
        setCountry(randomGuess[0]); // Stocke la première question reçue
      }
    };

    fetchData();
  }, []);

  const checkAnswer = () => {
    if (!country) return;

    if (input.trim().toLowerCase() === country.correct_answer.toLowerCase()) {
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
    setInput("");
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
  },
  emoji: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "80%",
  },
  message: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default GameEmoji;
