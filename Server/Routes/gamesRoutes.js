import express from 'express';
import gamesController from '../Controllers/gameController.js';

const router = express.Router();


router.get('/', gamesController.getGamesNames);


export default router;