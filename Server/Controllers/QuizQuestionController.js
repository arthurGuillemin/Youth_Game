import QuizQuestionModel from '../Models/QuizQuestionModel.js';

const quizQuestionController = {
  async createQuestion(req, res) {
    try {
      const { game_id, question_text, answer_options, correct_answer } = req.body;
      const question = await QuizQuestionModel.createQuestion({ game_id, question_text, answer_options, correct_answer });
      res.status(201).json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllQuestions(req, res) {
    try {
      const questions = await QuizQuestionModel.getAllQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getQuestionById(req, res) {
    try {
      const { id } = req.params;
      const question = await QuizQuestionModel.getQuestionById(id);
      if (!question) return res.status(404).json({ message: 'Question introuvable' });
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getRandomQuestions(req, res) {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit) : 10;
      const questions = await QuizQuestionModel.getRandomQuestions(limit);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  async updateQuestion(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const question = await QuizQuestionModel.updateQuestion(id, updates);
      res.json(question);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteQuestion(req, res) {
    try {
      const { id } = req.params;
      const response = await QuizQuestionModel.deleteQuestion(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default quizQuestionController;