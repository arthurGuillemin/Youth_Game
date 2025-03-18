const express = require('express');
const router = express.Router();
const euquizController = require('../Controllers/euquizController');



router.get('/', euquizController.getEuquizQuestions);
router.get('/:category/exclude/:country/:difficulty', euquizController.getQuestionByCategoryExcludeCountry);
module.exports = router;