import ScoreModel from '../Models/scoreModel.js';

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

  async getAllScores(req, res) {
    try {
      const scores = await ScoreModel.getAllScores();
      res.json(scores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getScoreById(req, res) {
    try {
      const { id } = req.params;
      const score = await ScoreModel.getScoreById(id);
      if (!score) return res.status(404).json({ message: 'Score introuvable' });
      res.json(score);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateScore(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const score = await ScoreModel.updateScore(id, updates);
      res.json(score);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteScore(req, res) {
    try {
      const { id } = req.params;
      const response = await ScoreModel.deleteScore(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getScoreByUserid(req, res) {
    try {
      const { user_id } = req.params;
      if (!user_id) {
        return res.status(400).json({ error: "user_id est requis" });
      }
      const score = await ScoreModel.getScoreByUserid(user_id);
      if (!score.length) {
        return res.status(404).json({ message: "Aucun score trouvé pour cet utilisateur" });
      }
      res.json(score);
    } catch (error) {
      console.error("Erreur API :", error.message); 
      res.status(500).json({ error: error.message });
    }
  }
};

export default scoreController;