const API_BASE_URL = "http://13.60.245.133:3000/emojiguess";

export const getEmojiGuess = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des emojiGuess");

    return await response.json();
  } catch (error) {
    console.error("getEmojiGuess:", error.message);
    return null;
  }
};

export const getRandomGuess = async (limit = 10) => {
  try {
    const response = await fetch(`${API_BASE_URL}/random?limit=${limit}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des devinettes emojiGuess random");

    return await response.json();
  } catch (error) {
    console.error("getRandomGuess:", error.message);
    return null;
  }
};
