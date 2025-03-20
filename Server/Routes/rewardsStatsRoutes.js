import express from 'express';
import rewardController from '../Controllers/rewardController.js';

const router = express.Router();

router.get('/', rewardController.getRewards);
router.get('/:id', rewardController.getRewardsInfos);



export default router;