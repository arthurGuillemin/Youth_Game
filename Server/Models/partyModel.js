const supabase = require('../Config/supabase');

const PartyModel = {
  async createParty({ game_id, created_by, start_time, end_time }) {
    const { data, error } = await supabase
      .from('parties')
      .insert([{ game_id, created_by, start_time, end_time }]);
    if (error) throw error;
    return data[0];
  },

  async getAllParties() {
    const { data, error } = await supabase
      .from('parties')
      .select('*');
    if (error) throw error;
    return data;
  },

  async getPartyById(id) {
    const { data, error } = await supabase
      .from('parties')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  async updateParty(id, updates) {
    const { data, error } = await supabase
      .from('parties')
      .update(updates)
      .eq('id', id);
    if (error) throw error;
    return data[0];
  },

  async deleteParty(id) {
    const { error } = await supabase
      .from('parties')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return { message: 'Partie supprimée' };
  }
};

module.exports = PartyModel;
