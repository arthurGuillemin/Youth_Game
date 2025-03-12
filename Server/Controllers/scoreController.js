const ScoreModel = require('../models/scoreModel');

const scoreController = {
  async createScore(req, res) {
    try {
      const { user_id, game_id, party_id, points } = req.body;
      const score = await ScoreModel.createScore({ user_id, game_id, party_id, points });
      res.status(201).json(score);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getScoresByUser(req, res) {
    try {
      const { user_id } = req.params;
      const scores = await ScoreModel.getScoresByUser(user_id);
      res.json(scores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getScoresByParty(req, res) {
    try {
      const { party_id } = req.params;
      const scores = await ScoreModel.getScoresByParty(party_id);
      res.json(scores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = scoreController;
