import supabase from '../Config/supabase.js';

const PartyModel = {
  async createParty({ game_id, created_by, start_time, end_time }) {
    const { data, error } = await supabase
      .from('parties')
      .insert([{ game_id, created_by, start_time, end_time }]);
    if (error) throw error;
    return { message: 'Partie created' };
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
      return { message: 'Partie modified' };

    },

  async deleteParty(id) {
    const { error } = await supabase
      .from('parties')
      .delete()
      .eq('id', id);
    if (error) throw error;
    return { message: 'Partie deleted' };
  }, 


  async getPartyUsers(party_id) {
    const { data, error } = await supabase
      .from('party_players')
      .select('user_id, users(username)')
      .eq('party_id', party_id);
    if (error) throw error;
    return data;
  }, 
  
  async addUserToParty(partyId, userId) {
    const { data, error } = await supabase
      .from('party_players')
      .insert([{ party_id: partyId, user_id: userId }]);
    if (error) throw error;
    return { message: `Utilisateur ${userId} ajouté à la partie ${partyId}` };
  },

  async removeUserFromParty(partyId, userId) {
    const { error } = await supabase
      .from('party_players')
      .delete()
      .eq('party_id', partyId)
      .eq('user_id', userId);
    if (error) throw error;
    return { message: `Utilisateur ${userId} retiré de la partie ${partyId}` };
  },

  async getUserNationInParty (partyId) {
    const { data, error } = await supabase
      .from('party_players')
      .select('user_id, users(username, country)')
      .eq('party_id', partyId);
    if (error) throw error;
    return data;
  },

  

  
};

export default PartyModel;