const express = require('express');
const router = express.Router();
const quizQuestionController = require('../Controllers/QuizQuestionController');
router.get('/random', quizQuestionController.getRandomQuestions);

router.post('/', quizQuestionController.createQuestion);
router.get('/', quizQuestionController.getAllQuestions);
router.get('/:id', quizQuestionController.getQuestionById);
router.put('/:id', quizQuestionController.updateQuestion);
router.delete('/:id', quizQuestionController.deleteQuestion);

module.exports = router;
