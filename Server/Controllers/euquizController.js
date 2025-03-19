import euQuizModel from "../Models/euquizModel.js";

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
  }, 
  async getQuestionByNationDifficulty(req, res) {
    try {
      console.log("Params reçus:", req.params); // Log pour voir les paramètres
  
      const { nation, difficulty, category } = req.params;
      if (!nation || !difficulty || !category) {
        return res.status(400).json({ error: "Les paramètres 'nation', 'difficulty', 'category' sont requis." });
      }
  
      const questions = await euQuizModel.getQuestionByNationDifficulty(nation, difficulty, category);
      
      if (!questions.length) {
        return res.status(404).json({ message: "Aucune question trouvée pour ces critères." });
      }
  
      res.json(questions);
    } catch (error) {
      console.error("Erreur dans getQuestionByNationDifficulty:", error.message);
      res.status(500).json({ error: error.message });
    }
  }
};  

export default euQuizController;