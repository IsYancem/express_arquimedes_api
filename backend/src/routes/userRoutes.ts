import { Router } from 'express';
import { createUser, loginUser, getUserByUsername } from '../controllers/userController';

const router = Router();

router.post('/users', createUser);
router.post('/users/login', loginUser);
router.post('/loginByusername', getUserByUsername);

export default router;