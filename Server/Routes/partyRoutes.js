const express = require('express');
const router = express.Router();
const partyController = require('../Controllers/partyController');

router.post('/', partyController.createParty);   // POST /api/parties
router.get('/', partyController.getAllParties);    // GET /api/parties
router.get('/:id', partyController.getParty);      // GET /api/parties/:id

module.exports = router;
