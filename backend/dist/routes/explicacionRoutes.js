"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/explicacionRoutes.ts
const express_1 = require("express");
const explicacionController_1 = require("../controllers/explicacionController");
const router = (0, express_1.Router)();
router.post('/explicaciones', explicacionController_1.createExplicacion);
exports.default = router;
