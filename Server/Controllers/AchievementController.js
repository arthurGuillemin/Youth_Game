import AchievementModel from '../Models/AchievementModel.js';

const achievementController = {

  async createAchievement(req, res) {
    try {
      const { user_id, achievement_name } = req.body;
      const achievement = await AchievementModel.createAchievement({ user_id, achievement_name });
      res.status(201).json(achievement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAchievementsByUser(req, res) {
    try {
      const { user_id } = req.params;
      const achievements = await AchievementModel.getAchievementsByUser(user_id);
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAllAchievements(req, res) {
    try {
      const achievements = await AchievementModel.getAllAchievements();
      res.json(achievements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async deleteAchievement(req, res) {
    try {
      const { id } = req.params;
      await AchievementModel.deleteAchievement(id);
      res.json({ message: 'Achievement deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default achievementController;
