const API_BASE_URL = "http://13.60.245.133:3000/leaderboard";

export const getLeaderBoard = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération du leaderboard");

    return await response.json();
  } catch (error) {
    console.error("getLeaderBoard:", error.message);
    return null;
  }
};

export const getLeaderBoardByCountry = async (country) => {
  try {
    const response = await fetch(`${API_BASE_URL}/country/${country}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération du leaderboard par pays");

    return await response.json();
  } catch (error) {
    console.error("getLeaderBoardByCountry:", error.message);
    return null;
  }
};

export const getCountryLeaderboard = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/countries`);

    if (!response.ok) throw new Error("Erreur lors de la récupération du classement par pays");

    return await response.json();
  } catch (error) {
    console.error("getCountryLeaderboard:", error.message);
    return null;
  }
};
