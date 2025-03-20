const API_BASE_URL = "http://13.60.245.133:3000/rewards";

export const getRewards = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);

    if (!response.ok) throw new Error("Erreur lors de la récupération des récompenses");

    return await response.json();
  } catch (error) {
    console.error("getRewards:", error.message);
    return null;
  }
}

export const getRewardDetails = async (rewardId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${rewardId}`);

    return await response.json();
  } catch (error) {
    console.error("getRewardDetails:", error.message);
    return null;
  }
}