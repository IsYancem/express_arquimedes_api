import { Router } from 'express';
import { createTemaWithDetails } from '../controllers/temaController';

const router = Router();

router.post('/temas', createTemaWithDetails);

export default router;