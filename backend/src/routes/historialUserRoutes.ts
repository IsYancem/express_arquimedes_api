// src/routes/historialUserRoutes.ts
import express from 'express';
import { createOrUpdateHistorial } from '../controllers/HistorialUserController';

const router = express.Router();

router.post('/historial-user', createOrUpdateHistorial);

export default router;