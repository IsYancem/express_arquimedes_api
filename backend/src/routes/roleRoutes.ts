import { Router } from 'express';
import { createRole } from '../controllers/roleController';

const router = Router();

router.post('/roles', createRole);

export default router;