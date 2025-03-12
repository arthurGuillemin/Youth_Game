const supabase = require('../Config/supabase');

const ScoreModel = {
  async createScore({ user_id, game_id, party_id, points }) {
    const { data, error } = await supabase
      .from('scores')
      .insert([{ user_id, game_id, party_id, points }]);
    if (error) throw error;
    return data[0];
  },

  async getScoresByUser(user_id) {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('user_id', user_id);
    if (error) throw error;
    return data;
  },

  async getScoresByParty(party_id) {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('party_id', party_id);
    if (error) throw error;
    return data;
  },
};

module.exports = ScoreModel;
