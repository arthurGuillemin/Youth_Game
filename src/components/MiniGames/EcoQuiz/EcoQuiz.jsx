import React, { useState, useEffect } from 'react';
import './EcoQuiz.css';
import { submitQuizScore } from '../../services/api';

const EcoQuiz = () => {
  const [questions, setQuestions] = useState([
    { question: "What is the main cause of global warming?", options: ["CO2", "Oxygen", "Nitrogen"], answer: "CO2" },
    { question: "What is the most eco-friendly energy source?", options: ["Coal", "Solar", "Oil"], answer: "Solar" }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[currentIndex].answer) {
      setScore(score + 10);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      submitQuizScore(score);
      alert("Game Over! Your score: " + score);
    }
  };

  return (
    <div className="eco-quiz">
      <h2>{questions[currentIndex].question}</h2>
      {questions[currentIndex].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
      ))}
      <p>Score: {score}</p>
    </div>
  );
};

export default EcoQuiz;
