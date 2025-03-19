import express from 'express';
import leaderboardController from '../Controllers/leaderboardController.js';
const router = express.Router();

router.get('/', leaderboardController.getLeaderBoard);
router.get('/country/:country', leaderboardController.getLeaderBoardByCountry);
router.get('/countries', leaderboardController.getCountryLeaderboard);

export default router;