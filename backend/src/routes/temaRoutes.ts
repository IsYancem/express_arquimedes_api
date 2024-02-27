import { Router } from 'express';
import { createTemaWithDetails, getTemasWithDetails } from '../controllers/temaController';

const router = Router();

router.post('/temas', createTemaWithDetails);
router.get('/temas', getTemasWithDetails);

export default router;