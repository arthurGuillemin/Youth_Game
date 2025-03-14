const supabase = require('../Config/supabase');

const LeaderboardModel = {
  async getLeaderBoard() {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('user_id, total_points, users(username)')
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
};

module.exports = LeaderboardModel;
