import express from 'express';
import partyController from '../Controllers/partyController.js';

const router = express.Router();


router.post('/', partyController.createParty);
router.get('/', partyController.getAllParties);
router.get('/:id', partyController.getPartyById);
router.get('/:id/users', partyController.getPartyUsers);
router.put('/:id', partyController.updateParty);
router.delete('/:id', partyController.deleteParty);
router.post('/:id/add', partyController.addUserToParty);
router.post('/:id/remove', partyController.removeUserFromParty);
router.get('/:id/nations' , partyController.getUserNationInParty);

export default router;
