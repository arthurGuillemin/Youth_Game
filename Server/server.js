const express = require('express');
const app = express();
require('dotenv').config();

const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.json());

const userRoutes = require('./Routes/UserRoutes');
const partyRoutes = require('./Routes/partyRoutes');
const scoreRoutes = require('./Routes/scoreRoutes');
const quizQuestionRoutes = require('./Routes/QuizQuestionRoutes');
const leaderboardRoutes = require('./Routes/leaderBoardRoutes');
const emojjiGuessRoutes = require('./Routes/emojiGuessRoutes');
const euquizQuestionsRoutes = require('./Routes/euquizQuestionsRoutes');
const gamesRoutes = require('./Routes/gamesRoutes');

app.use('/users', userRoutes);
app.use('/parties', partyRoutes);
app.use('/scores', scoreRoutes);
app.use('/quiz-questions', quizQuestionRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/emojiguess', emojjiGuessRoutes);
app.use('/euquizquestions', euquizQuestionsRoutes);
app.use('/games', gamesRoutes);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Serveur démarré sur http://0.0.0.0:3000');
});
