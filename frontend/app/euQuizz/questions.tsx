import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TimerBar from "../../components/euQuizz/TimerBar";
import AnswerCard from "../../components/euQuizz/AnswerCard";
import { getUser } from '../../services/userService';
import euQuizzStyles from "@/styles/euQuizzStyles";
import { getQuestionsByNationDifficulty } from "../../services/euQuizService";
import { createScore } from '../../services/scoreService';


const USER_ID = "c83b94c4-1aec-45e2-8c36-c1df039159f6";

export default function QuestionsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  // 🔥 Récupérer les paramètres
  const category = params.category || "Unknown";
  const difficulty = params.difficulty || "Easy";

  // 🔥 États pour stocker les questions et gérer le chargement
  interface Question {
    Question: string;
    correct_answer: string;
    anwser_options: string[];
  }

  const [questions, setQuestions] = useState<Question[]>([]);
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

  const handleSelectAnswer = async (answerId: string) => {
    if (!questions[currentQuestionIndex]) return; // Évite l'erreur si la question n'existe pas
  
    const isCorrect = questions[currentQuestionIndex].correct_answer === answerId;
  
    if (isCorrect) {
      let pointsToAdd = difficulty === "Easy" ? 100 : difficulty === "Medium" ? 300 : 500;
      setScore((prevScore) => prevScore + pointsToAdd);
    }
  
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      const user = await getUser(USER_ID);
      const userName = user ? user.username : "Unknown";
      await createScore({ user_id : USER_ID, game_id : "93794c67-aeae-4cd3-b5af-32e538b68afb",  points : score   });
  
      router.push({ pathname: "/euQuizz/result2", params: { score, name: userName } });
    }
  };
  
  
  return (
    <View>
<TimerBar
  key={currentQuestionIndex}
  duration={15}
  onTimeUp={() => {
    setCurrentQuestionIndex((prev) => (prev < questions.length - 1 ? prev + 1 : prev));
  }}
/>

      <View style={euQuizzStyles.questionContainer}>
        <Text style={euQuizzStyles.questionText}>{questions[currentQuestionIndex].Question}</Text>
        <View style={euQuizzStyles.peopleContainer}>
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
          <Ionicons name="person-outline" size={30} color="navy" />
        </View>
      </View>

      <View style={{ marginBottom: 40 }}>
  {questions[currentQuestionIndex].anwser_options.map((answer) => (
    <Text
      key={answer}
      style={{
        backgroundColor: "#4aabff",
        padding: 10,
        marginVertical: 5,
        textAlign: "center",
        borderRadius: 8,
        fontSize: 18,
        color: "white",
      }}
      onPress={() => handleSelectAnswer(answer)}
    >
      {answer}
    </Text>
  ))}
</View>

    </View>
  );
}
