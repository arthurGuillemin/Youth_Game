const express = require('express');
const router = express.Router();
const emojiGuessController = require('../Controllers/emojiGuessController');

router.get('/', emojiGuessController.getEmojiGuess);
router.get('/random', emojiGuessController.getRandomGuess);



module.exports = router;