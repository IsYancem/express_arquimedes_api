"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/explicacionRoutes.ts
const express_1 = __importDefault(require("express"));
const explicacionController_1 = require("../controllers/explicacionController");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const router = express_1.default.Router();
router.post('/updateExplicacionPhotos/:id', uploadMiddleware_1.upload.fields([
    { name: 'photo_teoria_1', maxCount: 1 },
    { name: 'photo_teoria_2', maxCount: 1 },
    { name: 'photo_teoria_3', maxCount: 1 }
]), explicacionController_1.updateExplicacionPhotos);
exports.default = router;
