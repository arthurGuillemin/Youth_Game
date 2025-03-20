import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TimerBar from "../../components/euQuizz/TimerBar";
import AnswerCard from "../../components/euQuizz/AnswerCard";
import euQuizzStyles from "@/styles/euQuizzStyles";
import { getQuestionsByNationDifficulty } from "../../services/euQuizService";

export default function QuestionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // 🔥 Récupérer les paramètres
  const category = params.category || "Unknown";
  const difficulty = params.difficulty || "Easy";

  // 🔥 États pour stocker les questions et gérer le chargement
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("Paramètres reçus :", { category, difficulty });

    // 🔥 Récupérer les questions depuis l'API
    const fetchQuestions = async () => {
      const data = await getQuestionsByNationDifficulty(difficulty, category);
      if (data) {
        setQuestions(data);
      } else {
        console.error("Erreur lors du chargement des questions");
      }
      setLoading(false);
    };

    fetchQuestions();
  }, [category, difficulty]);

  if (loading) {
    return (
      <View style={euQuizzStyles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={euQuizzStyles.loadingContainer}>
        <Text>Aucune question trouvée.</Text>
      </View>
    );
  }

  const handleSelectAnswer = (answerId: string) => {
    const isCorrect = questions[currentQuestionIndex].correct_answer === answerId;

    if (isCorrect) {
      setScore(score + questions[currentQuestionIndex].points);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push({ pathname: "/euQuizz/result2", params: { score } });
    }
  };

  return (
    <View>
      <TimerBar key={currentQuestionIndex} duration={15} onTimeUp={() => setCurrentQuestionIndex((prev) => prev + 1)} />

      <View style={euQuizzStyles.questionContainer}>
        <Text style={euQuizzStyles.flag}>{questions[currentQuestionIndex].countryAbout}</Text>
        <Text style={euQuizzStyles.questionText}>{questions[currentQuestionIndex].Question}</Text>

        <View style={euQuizzStyles.peopleContainer}>
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
        </View>
      </View>

      <View style={{ marginBottom: 40 }}>
        {questions[currentQuestionIndex].anwser_options.map((answer) => (
          <View key={answer} style={{ marginBottom: 10 }}>
            <AnswerCard image={null} onPress={() => handleSelectAnswer(answer)} />
          </View>
        ))}
      </View>
    </View>
  );
}
