import React, { useState, useEffect  } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; 
import { getRandomGuess } from '../services/emojiGuess.js';

// const countries = [
//   { name: 'France', emojis: ['🇫🇷', '🍽️', '🍷', '🌿'] },
//   { name: 'Allemagne', emojis: ['🇩🇪', '🍺', '⚽', '🍖'] },
//   { name: 'Belgique', emojis: ['🇧🇪', '🍻', '🍫', '⚖️'] },
//   { name: 'Espagne', emojis: ['🇪🇸', '🍷', '🥘', '🎶'] },
//   { name: 'Italie', emojis: ['🇮🇹', '🍕', '🍝', '🎭'] },
//   { name: 'Pays-Bas', emojis: ['🇳🇱', '🌷', '🧀', '🚲'] },
//   { name: 'Suède', emojis: ['🇸🇪', '🎿', '🍒', '🦸‍♀️'] },
//   { name: 'Autriche', emojis: ['🇦🇹', '🎻', '🥨', '🏰'] },
//   { name: 'Danemark', emojis: ['🇩🇰', '🍪', '⚓', '🏖️'] },
//   { name: 'Pologne', emojis: ['🇵🇱', '🍲', '🎵', '⚔️'] },
//   { name: 'Portugal', emojis: ['🇵🇹', '🍷', '🍤', '⚽'] },
// ];

// const getRandomCountry = () => countries[Math.floor(Math.random() * countries.length)];

const GameEmoji = () => {
  const [country, setCountry] = useState<any>(null);
  const [input, setInput] = useState('');
  const [emojiIndex, setEmojiIndex] = useState(1);
  const [message, setMessage] = useState('');

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
    if (input.trim().toLowerCase() === country.name.toLowerCase()) {
      setMessage('Bravo ! Vous avez trouvé !');
      Alert.alert('Félicitations !', `La bonne réponse est ${country.name}`, [
        {
          text: 'OK',
          onPress: () => {
            setTimeout(() => {
              router.back();
            }, 200);
          },
        },
      ]);
    } else {
      if (emojiIndex < 4) {
        setEmojiIndex(emojiIndex + 1);
        setMessage('Incorrect, essayez encore !');
      } else {
        setMessage('Perdu ! La bonne réponse était ${country.name}');
      }
    }
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{country.emojis.slice(0, emojiIndex).join(' ')}</Text>
      <TextInput
        style={styles.input}
        placeholder="Devinez le pays"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Valider" onPress={checkAnswer} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
  },
  message: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default GameEmoji;
