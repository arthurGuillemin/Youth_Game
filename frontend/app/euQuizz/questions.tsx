import { View, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import TimerBar from "../../components/euQuizz/TimerBar";
import AnswerCard from "../../components/euQuizz/AnswerCard";
import euQuizzStyles from "@/styles/euQuizzStyles";

export default function QuestionsScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
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
        //{ id: "4", text: "test", isCorrect: false },
      ],
    },
  ];

  const handleSelectAnswer = (answerId: string) => {
    const isCorrect = questions[currentQuestionIndex].answers.find(a => a.id === answerId)?.isCorrect;
    if (isCorrect) {
      setScore(score + questions[currentQuestionIndex].points);
    }
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const handleTimeUp = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <View>
      <TimerBar duration={15} onTimeUp={handleTimeUp} />

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
