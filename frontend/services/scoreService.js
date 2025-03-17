const API_BASE_URL = "http://13.60.245.133:3000/scores";

export const createScore = async (scoreData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(scoreData),
    });

    if (!response.ok) throw new Error("Erreur lors de la création du score");

    return await response.json();
  } catch (error) {
    console.error("createScore:", error.message);
    return null;
  }
};

export const getAllScores = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des scores");

    return await response.json();
  } catch (error) {
    console.error("getAllScores:", error.message);
    return null;
  }
};

export const getScoreById = async (scoreId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${scoreId}`);

    if (!response.ok) throw new Error("Score introuvable");

    return await response.json();
  } catch (error) {
    console.error("getScoreById:", error.message);
    return null;
  }
};

export const getScoreByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);

    if (!response.ok) throw new Error("Aucun score trouvé pour cet utilisateur");

    return await response.json();
  } catch (error) {
    console.error("getScoreByUserId:", error.message);
    return null;
  }
};
