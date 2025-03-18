const express = require('express');
const router = express.Router();
const gamesController = require('../Controllers/gameController');

router.get('/', gamesController.getGamesNames);


module.exports = router;