import { View, Text, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getRandomQuestions } from "../services/quizService"; 

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const shuffleArray = (array: any[]): any[] => {
  return array.sort(() => Math.random() - 0.5);
};

const GameQuizz = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttonColors, setButtonColors] = useState(Array(4).fill('#007bff'));
  const [isAnswered, setIsAnswered] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsFromAPI = await getRandomQuestions(10);
      console.log("Questions reçues :", questionsFromAPI); // Debugging

      if (questionsFromAPI && Array.isArray(questionsFromAPI) && questionsFromAPI.length > 0) {
        const formattedQuestions = questionsFromAPI.map(q => ({
          question: q.question_text, // ✅ Adaptation des clés de l'API
          options: q.answer_options,
          answer: q.correct_answer,
        }));

        setRandomizedQuestions(shuffleArray(formattedQuestions));
      } else {
        Alert.alert("Erreur", "Impossible de charger les questions.");
      }
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (selectedOption: string) => {
    const currentQuestion = randomizedQuestions[currentQuestionIndex];
    if (!currentQuestion) return;

    const correctAnswer = currentQuestion.answer;
    const newButtonColors = [...buttonColors];

    if (selectedOption === correctAnswer) {
      newButtonColors[currentQuestion.options.indexOf(selectedOption)] = 'green';
      setScore(prevScore => prevScore + 1);
    } else {
      newButtonColors[currentQuestion.options.indexOf(selectedOption)] = 'red';
      newButtonColors[currentQuestion.options.indexOf(correctAnswer)] = 'green';
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
          `Vous avez obtenu ${score + 1} sur 10`, // ✅ Correction affichage score final
          [{ text: "OK", onPress: onFinish }]
        );
        setCurrentQuestionIndex(0);
        setScore(0); // ✅ Reset du score après le quiz
      }
      setIsAnswered(false);
      setButtonColors(Array(4).fill('#007bff'));
    }, 500);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (randomizedQuestions.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Aucune question disponible.</Text>
      </View>
    );
  }

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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: "red",
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
