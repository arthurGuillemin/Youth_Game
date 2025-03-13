const express = require('express');
const router = express.Router();
const scoreController = require('../Controllers/scoreController');

router.post('/', scoreController.createScore);
router.get('/', scoreController.getAllScores);
router.get('/:id', scoreController.getScoreById);
router.put('/:id', scoreController.updateScore);
router.delete('/:id', scoreController.deleteScore);

module.exports = router;
