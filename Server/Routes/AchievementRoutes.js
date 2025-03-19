import express from 'express';
import achievementController from '../Controllers/AchievementController.js';

const router = express.Router();

router.post('/', achievementController.createAchievement);    
router.get('/', achievementController.getAllAchievements);    
router.get('/:user_id', achievementController.getAchievementsByUser);    
router.delete('/:id', achievementController.deleteAchievement);

export default router;
