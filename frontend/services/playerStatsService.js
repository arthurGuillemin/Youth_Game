const API_BASE_URL = "http://13.60.245.133:3000/playerstats";


export const getUserStats = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`);

    return await response.json();
  } catch (error) {
    console.error("getUserStats:", error.message);
    return null;
  }
}

export const getAllUserStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des statistiques des joueurs");

    return await response.json();
  } catch (error) {
    console.error("getAllUserStats:", error.message);
    return null;
  }
}