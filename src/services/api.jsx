import axios from 'axios';

const API_URL = 'https://backend-url.com/api';

// Get leaderboard data
export const getLeaderboard = async () => {
  const response = await axios.get(`${API_URL}/leaderboard`);
  return response.data;
};

// Submit quiz score
export const submitQuizScore = async (score) => {
  await axios.post(`${API_URL}/submit-score`, { score });
};

// Get Scroll Tree game data
export const getScrollTreeData = async () => {
  const response = await axios.get(`${API_URL}/scroll-tree`);
  return response.data;
};
