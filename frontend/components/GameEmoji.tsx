import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { getRandomGuess } from "../services/emojiGuess.js";
import theme from "@/styles/theme";

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ecf0f1',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '80%',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
  },
});

export default GameEmoji;
