import  supabase from '../Config/supabase.js'

const playerStatsModel = {
  async getPLayersStats() {
    const { data, error } = await supabase
      .from('player_stats')
      .select('*');
    if (error) throw error;
    return data;
  }, 

  async getPlayerStatsById(id) {
    const { data, error } = await supabase
      .from('player_stats')
      .select('*')
      .eq('user_id', id)
    if (error) throw error;
    return data;
  }, 
}

export default playerStatsModel;