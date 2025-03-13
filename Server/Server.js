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

app.use('/users', userRoutes);
app.use('/parties', partyRoutes);
app.use('/scores', scoreRoutes);
app.use('/quiz-questions', quizQuestionRoutes);


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Serveur démarré sur http://0.0.0.0:3000');
});

