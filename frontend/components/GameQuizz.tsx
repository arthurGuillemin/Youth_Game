import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';

type Question = {
    question: string;
    options: string[];
    answer: string;
  };

const questions = [
  {
    question: "Quelle est la capitale de l'Allemagne ?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "Berlin"
  },
  {
    question: "Quel pays a rejoint l'UE en 2004 ?",
    options: ["Pologne", "Norvège", "Suisse", "Serbie"],
    answer: "Pologne"
  },
  {
    question: "Quelle monnaie est utilisée en Espagne ?",
    options: ["Euro", "Livre", "Franc", "Dollar"],
    answer: "Euro"
  },
  {
    question: "Qui a écrit 'Les Misérables' ?",
    options: ["Victor Hugo", "Emile Zola", "Molière", "Voltaire"],
    answer: "Victor Hugo"
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    options: ["Terre", "Jupiter", "Saturne", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "Quelle est la capitale du Japon ?",
    options: ["Séoul", "Pékin", "Tokyo", "Manille"],
    answer: "Tokyo"
  },
  {
    question: "En quelle année a eu lieu le premier homme sur la Lune ?",
    options: ["1969", "1972", "1959", "1980"],
    answer: "1969"
  },
  {
    question: "Quelle est la langue officielle du Brésil ?",
    options: ["Espagnol", "Anglais", "Portugais", "Français"],
    answer: "Portugais"
  },
  {
    question: "Quel est l'élément chimique dont le symbole est 'O' ?",
    options: ["Or", "Oxygène", "Ozone", "Osmium"],
    answer: "Oxygène"
  },
  {
    question: "Quel est l'auteur du roman '1984' ?",
    options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"],
    answer: "George Orwell"
  },
  {
    question: "Quelle est la plus grande île du monde ?",
    options: ["Australie", "Groenland", "Borneo", "Madagascar"],
    answer: "Groenland"
  },
  {
    question: "Quelle est la monnaie utilisée au Royaume-Uni ?",
    options: ["Euro", "Livre Sterling", "Franc", "Dollar"],
    answer: "Livre Sterling"
  },
  {
    question: "Quel est l'élément chimique dont le symbole est 'H' ?",
    options: ["Hydrogène", "Hélium", "Holmium", "Hafnium"],
    answer: "Hydrogène"
  },
  {
    question: "Qui a peint la Mona Lisa ?",
    options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "En quelle année la Tour Eiffel a-t-elle été construite ?",
    options: ["1889", "1900", "1920", "1850"],
    answer: "1889"
  },
  {
    question: "Quel est le pays d'origine du fromage 'Brie' ?",
    options: ["France", "Italie", "Suisse", "Allemagne"],
    answer: "France"
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    options: ["Atlantique", "Indien", "Arctique", "Pacifique"],
    answer: "Pacifique"
  },
  {
    question: "Qui a inventé le téléphone ?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Albert Einstein"],
    answer: "Alexander Graham Bell"
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    options: ["Amazonie", "Nil", "Mississippi", "Yangtsé"],
    answer: "Amazonie"
  },
  {
    question: "Quel est le capital de l'Italie ?",
    options: ["Rome", "Venise", "Florence", "Milan"],
    answer: "Rome"
  },
  {
    question: "En quelle année la Première Guerre mondiale a-t-elle commencé ?",
    options: ["1912", "1914", "1916", "1918"],
    answer: "1914"
  }
];

const shuffleArray = (array: any[]): any[] => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  const GameQuizz = ({ onFinish }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [buttonColors, setButtonColors] = useState(Array(4).fill('#007bff'));
    const [isAnswered, setIsAnswered] = useState(false);
    const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);

    const [score, setScore] = useState(0);
  
    useEffect(() => {
      const shuffledQuestions = shuffleArray([...questions]);
      setRandomizedQuestions(shuffledQuestions.slice(0, 10));
    }, []);
  
    const handleAnswer = (selectedOption: string) => {
      const correctAnswer = randomizedQuestions[currentQuestionIndex].answer;
      const newButtonColors = [...buttonColors];
  
      if (selectedOption === correctAnswer) {
        newButtonColors[randomizedQuestions[currentQuestionIndex].options.indexOf(selectedOption)] = 'green';
        setScore(score + 1);  
      } else {
        newButtonColors[randomizedQuestions[currentQuestionIndex].options.indexOf(selectedOption)] = 'red';
        newButtonColors[randomizedQuestions[currentQuestionIndex].options.indexOf(correctAnswer)] = 'green';

      }
  
      setButtonColors(newButtonColors);
      setIsAnswered(true);
  
      setTimeout(() => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < randomizedQuestions.length) {
          setCurrentQuestionIndex(nextIndex); 
        } else {
          Alert.alert(
            "Quiz terminé",
            `Vous avez obtenu ${score} sur 10`,
            [{ text: "OK", onPress: onFinish }]
          );
          setCurrentQuestionIndex(0);
        }
        setIsAnswered(false);
        setButtonColors(Array(4).fill('#007bff'));
      }, 500);
    };
  
    const progress = (currentQuestionIndex + 1) / randomizedQuestions.length;
  
    return (
      <View style={styles.container}>
        <View style={styles.progressBarContainer}>
          <Text style={styles.progressText}>
            Question {currentQuestionIndex + 1} / {randomizedQuestions.length}
          </Text>
          <View style={styles.progressBarWrapper}>
            <View 
              style={[styles.progressBar, { width: `${progress * 100}%` }]} 
            />
          </View>
        </View>

        <Text style={styles.question}>{randomizedQuestions[currentQuestionIndex]?.question}</Text>

        {randomizedQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, { backgroundColor: buttonColors[index] }]}
            onPress={() => !isAnswered && handleAnswer(option)}
          >
            <Text style={styles.buttonText}>{option}</Text>
          </TouchableOpacity>
        ))}
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
    progressBarContainer: {
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
    },
    progressText: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    progressBarWrapper: {
      width: '80%',
      height: 10,
      backgroundColor: '#e0e0e0',
      borderRadius: 5,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#4caf50', 
    },
    question: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    button: {
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
  
  export default GameQuizz;