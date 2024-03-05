"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/historialUserRoutes.ts
const express_1 = __importDefault(require("express"));
const HistorialUserController_1 = require("../controllers/HistorialUserController");
const router = express_1.default.Router();
router.post('/historial-user', HistorialUserController_1.createOrUpdateHistorial);
exports.default = router;
