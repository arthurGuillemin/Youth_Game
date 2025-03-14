const express = require('express');
const router = express.Router();
const scoreController = require('../Controllers/scoreController');

router.post('/', scoreController.createScore);
router.get('/', scoreController.getAllScores);
router.get('/:id', scoreController.getScoreById);
router.get('/user/:user_id', scoreController.getScoreByUserid);
router.put('/:id', scoreController.updateScore);
router.delete('/:id', scoreController.deleteScore);

module.exports = router;
