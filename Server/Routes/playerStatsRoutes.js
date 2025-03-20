import express from 'express';

import playerStatsController from '../Controllers/playerStatsController.js';

const router = express.Router();

router.get('/', playerStatsController.getPlayersStats);
router.get('/:id', playerStatsController.getPlayersStatsById);


export default router;