import EmojiGuessModel from '../Models/emojiGuessModel.js';

const emojiGuessController = {

  async getEmojiGuess(req, res) {
    try {
      const emojiGuess = await EmojiGuessModel.getEmojiGuess();
      res.json(emojiGuess);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },  

  async getRandomGuess(req, res) {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : 10;
      const questions = await EmojiGuessModel.getRandomGuess(limit);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

};

export default emojiGuessController;