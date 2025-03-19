import express from 'express';
import quizQuestionController from '../Controllers/quizQuestionController.js';

const router = express.Router();




router.get('/random', quizQuestionController.getRandomQuestions);
router.post('/', quizQuestionController.createQuestion);
router.get('/', quizQuestionController.getAllQuestions);
router.get('/:id', quizQuestionController.getQuestionById);
router.put('/:id', quizQuestionController.updateQuestion);
router.delete('/:id', quizQuestionController.deleteQuestion);

export default router;