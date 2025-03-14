const PartyModel = require('../Models/partyModel');

const partyController = {
  async createParty(req, res) {
    try {
      const { game_id, created_by, start_time, end_time } = req.body;
      const party = await PartyModel.createParty({ game_id, created_by, start_time, end_time });
      res.status(201).json(party);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllParties(req, res) {
    try {
      const parties = await PartyModel.getAllParties();
      res.json(parties);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getPartyById(req, res) {
    try {
      const { id } = req.params;
      const party = await PartyModel.getPartyById(id);
      if (!party) return res.status(404).json({ message: 'Partie introuvable' });
      res.json(party);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateParty(req, res) {
    try {
      const { id } = req.params;
      const updates = req.body;
      const party = await PartyModel.updateParty(id, updates);
      res.json(party);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteParty(req, res) {
    try {
      const { id } = req.params;
      const response = await PartyModel.deleteParty(id);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = partyController;
