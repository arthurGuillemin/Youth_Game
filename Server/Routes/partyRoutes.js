const express = require('express');
const router = express.Router();
const partyController = require('../Controllers/partyController');

router.post('/', partyController.createParty);
router.get('/', partyController.getAllParties);
router.get('/:id', partyController.getPartyById);
router.get('/:id/users', partyController.getPartyUsers);
router.put('/:id', partyController.updateParty);
router.delete('/:id', partyController.deleteParty);
router.post('/:id/add', partyController.addUserToParty);
router.post('/:id/remove', partyController.removeUserFromParty);

module.exports = router;
