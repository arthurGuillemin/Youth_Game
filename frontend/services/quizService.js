const API_BASE_URL = "http://13.60.245.133:3000/quiz-questions";

export const createQuestion = async (questionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(questionData),
    });

    if (!response.ok) throw new Error("Erreur lors de la création de la question");

    return await response.json();
  } catch (error) {
    console.error("createQuestion:", error.message);
    return null;
  }
};

export const getAllQuestions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des questions");

    return await response.json();
  } catch (error) {
    console.error("getAllQuestions:", error.message);
    return null;
  }
};

export const getRandomQuestions = async (limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/random?limit=${limit}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des questions aléatoires");

    return await response.json();
  } catch (error) {
    console.error("getRandomQuestions:", error.message);
    return null;
  }
};
