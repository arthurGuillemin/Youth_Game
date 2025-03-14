const LeaderboardModel = require('../Models/leaderboardModel');

const leaderboardController = {
  async getLeaderBoard(req, res) {
    try {
      const leaderboard = await LeaderboardModel.getLeaderBoard();
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getLeaderBoardByCountry(req, res) {
    try {
      const { country } = req.params;
      if (!country) {
        return res.status(400).json({ error: "Le pays est requis" });
      }
      const leaderboard = await LeaderboardModel.getLeaderBoardByCountry(country);
      if (!leaderboard.length) {
        return res.status(404).json({ message: "Aucun joueur trouvé pour ce pays" });
      }
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getCountryLeaderboard(req, res) {
    try {
      const leaderboard = await LeaderboardModel.getCountryLeaderboard();
      res.json(leaderboard);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = leaderboardController;