import { Router } from 'express';
import { createUser, loginUser, getUserByUsername, getUsersNotDocente } from '../controllers/userController';

const router = Router();

router.post('/users', createUser);
router.post('/users/login', loginUser);
router.post('/loginByUsername', getUserByUsername);
router.get('/usersNotDocente', getUsersNotDocente); // Agregar esta línea

export default router;