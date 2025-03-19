const app = express();

import dotenv from 'dotenv';
import cors from "cors";
import express from "express";
import path from "path";


import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Définir __dirname avec ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

import userRoutes from "./Routes/UserRoutes.js";
import partyRoutes from "./Routes/partyRoutes.js";
import scoreRoutes from "./Routes/scoreRoutes.js";
import quizQuestionRoutes from "./Routes/QuizQuestionRoutes.js";
import leaderboardRoutes from "./Routes/leaderBoardRoutes.js";
import emojiGuessRoutes from "./Routes/emojiGuessRoutes.js";
import euquizQuestionsRoutes from "./Routes/euquizQuestionsRoutes.js";
import gamesRoutes from "./Routes/gamesRoutes.js";

app.use('/users', userRoutes);
app.use('/parties', partyRoutes);
app.use('/scores', scoreRoutes);
app.use('/quiz-questions', quizQuestionRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/emojiguess', emojiGuessRoutes);
app.use('/euquizquestions', euquizQuestionsRoutes);
app.use('/games', gamesRoutes);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Serveur démarré sur http://0.0.0.0:3000');
});
