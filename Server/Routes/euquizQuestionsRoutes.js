import express from 'express';
import euquizController from '../Controllers/euquizController.js'; 

const router = express.Router();




router.get('/', euquizController.getEuquizQuestions);
router.get('/:category/exclude/:country/:difficulty', euquizController.getQuestionByCategoryExcludeCountry);
router.get('/categories', euquizController.getCategories);
router.get('/:nation/:difficulty/:category', euquizController.getQuestionByNationDifficulty);

export default router;