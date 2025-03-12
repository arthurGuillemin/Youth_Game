const express = require('express');
const router = express.Router();
const scoreController = require('../Controllers/scoreController');

router.post('/', scoreController.createScore);           
router.get('/user/:user_id', scoreController.getScoresByUser);   
router.get('/party/:party_id', scoreController.getScoresByParty);  
module.exports = router;
