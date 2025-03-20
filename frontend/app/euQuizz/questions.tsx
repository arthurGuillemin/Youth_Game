import { View, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import TimerBar from "../../components/euQuizz/TimerBar";
import AnswerCard from "../../components/euQuizz/AnswerCard";
import euQuizzStyles from "@/styles/euQuizzStyles";
import { useRouter } from "expo-router";

export default function QuestionsScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();
  const questions = [
    {
      id: "1",
      question: "What is a „Currywurst“?",
      flag: "🇩🇪",
      points: 100,
      answers: [
        { id: "1", image: require("../../assets/images/currywurst.png"), isCorrect: true },
        { id: "2", image: require("../../assets/images/bretzel.png"), isCorrect: false },
        { id: "3", image: require("../../assets/images/beer.png"), isCorrect: false },
      ],
    },
    {
      id: "2",
      question: "What is a „Baguette“?",
      flag: "🇫🇷",
      points: 200,
      answers: [
        { id: "1", image: require("../../assets/images/baguette.png"), isCorrect: true },
        { id: "2", image: require("../../assets/images/croissant.png"), isCorrect: false },
        { id: "3", image: require("../../assets/images/cheese.png"), isCorrect: false },
      ],
    },
  ];

  const handleSelectAnswer = (answerId: string) => {
    const isCorrect = questions[currentQuestionIndex].answers.find(a => a.id === answerId)?.isCorrect;

    if (isCorrect) {
      setScore(score + questions[currentQuestionIndex].points);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push({ pathname: "/euQuizz/result2", params: { score } });
    }
  };

  const handleTimeUp = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
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
              //text={answer.text}
              image={answer.image}
              onPress={() => handleSelectAnswer(answer.id)}
            />
            </View>
        ))}
      </View>

    </View>
  );
}
