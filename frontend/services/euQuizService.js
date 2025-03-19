import { get } from "http";

const API_BASE_URL = "http://13.60.245.133:3000/euquizquestions";

const euQuizService = {
  async getAllQuestions() {
    try {
      const response = await fetch(`${API_BASE_URL}/all`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des questions");
      return await response.json();
    } catch (error) {
      console.error("getAllQuestions:", error.message);
      return null;
    }
  },

  async getQuestionsByCategoryExcludeCountry(category, country, difficulty) {
    try {
      const response = await fetch(`${API_BASE_URL}/${category}/exclude/${country}/${difficulty}`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des questions filtrées");
      return await response.json();
    } catch (error) {
      console.error("getQuestionsByCategoryExcludeCountry:", error.message);
      return null;
    }
  },
  
  async getQuestionsByNationDifficulty(nation, difficulty, category) {
    try {
      const response = await fetch(`${API_BASE_URL}/${nation}/${difficulty}/${category}`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des questions filtrées");
      return await response.json();
    } catch (error) {
      console.error("getQuestionsByNationDifficulty:", error.message);
      return null;
    }
  },
};

export default euQuizService;
