import supabase from '../Config/supabase.js';

const gameModel = {
  async getGamesNames() {
    const { data, error } = await supabase
      .from('games')
      .select('name')
    if (error) throw error
    return data
  }
}

export default gameModel;