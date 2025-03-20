import supabase from '../Config/supabase.js';

const LeaderboardModel = {
  async getLeaderBoard() {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('user_id, total_points, users(username) , country')
      .order('total_points', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getLeaderBoardByCountry(country) {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('user_id, total_points, country, users(username)')
      .eq('country', country)
      .order('total_points', { ascending: false });

    if (error) throw error;
    return data;
  },
  async getCountryLeaderboard() {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('country, total_points');

    if (error) throw error;
    const countryScores = data.reduce((acc, entry) => {
      if (!acc[entry.country]) {
        acc[entry.country] = 0;
      }
      acc[entry.country] += entry.total_points;
      return acc;
    }, {});

    return Object.entries(countryScores)
      .map(([country, total_points]) => ({ country, total_points }))
      .sort((a, b) => b.total_points - a.total_points);
  },
};

export default LeaderboardModel;