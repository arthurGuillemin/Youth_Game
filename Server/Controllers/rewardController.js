import rewardsModel from "../Models/rewardsModel.js";


const rewardController = {
  async getRewards(req, res) {
    try {
      const rewards = await rewardsModel.getRewards();
      res.json(rewards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }, 
  async getRewardsInfos(req, res) {
    try {
      const { id } = req.params;
      const reward = await rewardsModel.getRewardsInfos(id);
      if (!reward) return res.status(404).json({ message: 'Récompense introuvable' });
      res.json(reward);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default rewardController;