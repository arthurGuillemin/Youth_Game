import express from 'express';
import userController from '../Controllers/userController.js';
const router = express.Router();

router.post('/', userController.createUser);    
router.get('/', userController.getAllUsers);    
router.get('/:id', userController.getUser);    
router.put('/:id/',userController.updateUser);

export default router;