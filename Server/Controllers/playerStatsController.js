import playerStatsModel from "../Models/playerStatsModel.js";


const playerStatsController = {
  async getPlayersStats(req, res) {
    try {
      const playersStats = await playerStatsModel.getPLayersStats();
      res.json(playersStats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  async getPlayersStatsById(req, res) {
    try {
      const { id } = req.params;
      const playerStats = await playerStatsModel.getPlayerStatsById(id);
      if (!playerStats) return res.status(404).json({ message: 'Statistiques introuvables' });
      res.json(playerStats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default playerStatsController;