const PartyModel = require('../models/partyModel');

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

  async getParty(req, res) {
    try {
      const { id } = req.params;
      const party = await PartyModel.getPartyById(id);
      if (!party) return res.status(404).json({ message: 'Partie non trouvée' });
      res.json(party);
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
};

module.exports = partyController;
