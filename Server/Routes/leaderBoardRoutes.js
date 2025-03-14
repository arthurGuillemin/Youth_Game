const express = require('express');
const router = express.Router();
const leaderboardController = require('../Controllers/leaderBoardController');

router.get('/', leaderboardController.getLeaderBoard);
router.get('/country/:country', leaderboardController.getLeaderBoardByCountry);

module.exports = router;
