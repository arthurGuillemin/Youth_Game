const supabase = require('../Config/supabase');

const ScoreModel = {
  async createScore({ user_id, game_id, party_id, points }) {
    const { data, error } = await supabase
      .from('scores')
      .insert([{ user_id, game_id, party_id, points }]);
    if (error) throw error;
    return data[0];
  },

  async getAllScores() {
    const { data, error } = await supabase
      .from('scores')
      .select('*');
    if (error) throw error;
    return data;
  },

  async getScoreById(id) {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async updateScore(id, updates) {
    const { data, error } = await supabase
      .from('scores')
      .update(updates)
      .eq('id', id);
    if (error) throw error;
    return data[0];
  },

  async deleteScore(id) {
    const { error } = await supabase
      .from('scores')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return { message: 'Score supprimé' };
  },

   async getScoreByUserid(user_id) {
    const { error, data } = await supabase
      .from('scores')
      .select('*')
      .eq('user_id', user_id);

    if (error) {
      console.error("Erreur Supabase :", error); 
      throw error;
    }

    return data;
  }

};

module.exports = ScoreModel;
