const euQuizModel = require('../Models/euquizModel');

const euQuizController = {

  async getEuquizQuestions(req, res) {
    try {
      const euQuizQuestions = await euQuizModel.getEuQuiz();
      res.json(euQuizQuestions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 

  async getQuestionByCategoryExcludeCountry(req, res) {
    try {
      const { category, country , difficulty } = req.params;
      if (!category || !country) {
        return res.status(400).json({ error: "Les paramètres 'category' , 'country' , 'difficulty' sont requis." });
      }

      const questions = await euQuizModel.getQuestionByCategoryExcludeCountry(category, country , difficulty);
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = euQuizController;