const supabase = require('../config/supabase');

const gameModel = {
  async getGamesNames() {
    const { data, error } = await supabase
      .from('games')
      .select('name')
    if (error) throw error
    return data
  }
}

module.exports = gameModel;