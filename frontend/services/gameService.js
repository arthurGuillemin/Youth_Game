const API_BASE_URL = "http://13.60.245.133:3000/games";

const gameService = {
  async getAllGamesNames() {
    try {
      const response = await fetch(`${API_BASE_URL}/all`);
      if (!response.ok) throw new Error("Erreur lors de la récupération des noms des jeux");
      return await response.json();
    } catch (error) {
      console.error("getAllGamesNames:", error.message);
      return null;
    }
  },
};

export default gameService;
