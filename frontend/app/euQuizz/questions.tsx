import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TimerBar from "../../components/euQuizz/TimerBar";
import AnswerCard from "../../components/euQuizz/AnswerCard";
import euQuizzStyles from "@/styles/euQuizzStyles";

export default function QuestionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // Récupération des paramètres transmis depuis DifficultySelection
  const category = params.category || "Unknown";
  const difficulty = params.difficulty || "Easy";
  
  // Log des paramètres pour vérification
  useEffect(() => {
    console.log("Paramètres reçus :", { category, difficulty });
  }, [category, difficulty]);

  // États pour gérer les questions, le score, etc.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  // Exemple de questions (à remplacer par le service getQuestionsByNationDifficulty)
  const questions = [
    {
      id: "1",
      question: "What is a „Currywurst“?",
      flag: "🇩🇪",
      points: 100,
      answers: [
        { id: "1", text: 'text', isCorrect: true },
        { id: "2", text: 'text', isCorrect: false },
        { id: "3", text: 'text', isCorrect: false },
      ],
    },
    {
      id: "2",
      question: "What is a „Baguette“?",
      flag: "🇫🇷",
      points: 200,
      answers: [
        { id: "1", text: 'text', isCorrect: true },
        { id: "2", text: 'text', isCorrect: false },
        { id: "3", text: 'text', isCorrect: false },
      ],
    },
  ];

  const handleSelectAnswer = (answerId: string) => {
    const isCorrect = questions[currentQuestionIndex].answers.find(a => a.id === answerId)?.isCorrect;

    if (isCorrect) {
      setScore(score + questions[currentQuestionIndex].points);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      router.push({ pathname: "/euQuizz/result2", params: { score } });
    }
  };

  const handleTimeUp = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      router.push({ pathname: "/euQuizz/result2", params: { score } });
    }
  };

  return (
    <View>
      <TimerBar key={currentQuestionIndex} duration={15} onTimeUp={handleTimeUp} />

      <View style={euQuizzStyles.questionContainer}>
        <Text style={euQuizzStyles.flag}>{questions[currentQuestionIndex].flag}</Text>
        <Text style={euQuizzStyles.questionText}>{questions[currentQuestionIndex].question}</Text>

        <View style={euQuizzStyles.peopleContainer}>
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
        </View>
      </View>

      <View style={{ marginBottom: 40 }}>
        {questions[currentQuestionIndex].answers.map((answer) => (
          <View key={answer.id} style={{ marginBottom: 10 }}>
            <AnswerCard
              image={answer.image}

              onPress={() => handleSelectAnswer(answer.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
