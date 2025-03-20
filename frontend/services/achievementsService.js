const API_BASE_URL = "http://13.60.245.133:3000/achievements";

export const getAllAchievements = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des achievements");
    return await response.json();
  } catch (error) {
    console.error("getAllAchievements:", error.message);
    return null;
  }
};

export const getAchievementsByUser = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`);
    if (!response.ok) throw new Error("Erreur lors de la récupération des achievements de l'utilisateur");
    return await response.json();
  } catch (error) {
    console.error("getAchievementsByUser:", error.message);
    return null;
  }
};

export const addAchievementToUser = async (userId, achievementId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, achievementId }),
    });
    if (!response.ok) throw new Error("Erreur lors de l'ajout de l'achievement");
    return await response.json();
  } catch (error) {
    console.error("addAchievementToUser:", error.message);
    return null;
  }
};

export const removeAchievementFromUser = async (userId, achievementId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/remove`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, achievementId }),
    });
    if (!response.ok) throw new Error("Erreur lors de la suppression de l'achievement");
    return await response.json();
  } catch (error) {
    console.error("removeAchievementFromUser:", error.message);
    return null;
  }
};
