import express from 'express';
import emojiGuessController from '../Controllers/emojiGuessController.js';

const router = express.Router();

router.get('/', emojiGuessController.getEmojiGuess);
router.get('/random', emojiGuessController.getRandomGuess);

export default router;
