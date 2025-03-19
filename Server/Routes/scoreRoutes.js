import express from 'express';
import scoreController from '../Controllers/scoreController.js';

const router = express.Router();

router.post('/', scoreController.createScore);
router.get('/', scoreController.getAllScores);
router.get('/:id', scoreController.getScoreById);
router.get('/user/:user_id', scoreController.getScoreByUserid);
router.put('/:id', scoreController.updateScore);
router.delete('/:id', scoreController.deleteScore);

export default router;