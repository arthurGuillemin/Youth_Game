const gameModel = require('../Models/gameModel');

const gameController = {

  async getGamesNames(req, res) {
    try {
      const games = await gameModel.getGamesNames();
      res.json(games);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = gameController;