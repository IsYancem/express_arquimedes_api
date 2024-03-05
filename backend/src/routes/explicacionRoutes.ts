// src/routes/explicacionRoutes.ts
import express from 'express';
import { updateExplicacionPhotos } from '../controllers/explicacionController';
import { upload } from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/updateExplicacionPhotos/:id', upload.fields([
  { name: 'photo_teoria_1', maxCount: 1 },
  { name: 'photo_teoria_2', maxCount: 1 },
  { name: 'photo_teoria_3', maxCount: 1 }
]), updateExplicacionPhotos);

export default router;