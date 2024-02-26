"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const temaController_1 = require("../controllers/temaController");
const router = (0, express_1.Router)();
router.post('/temas', temaController_1.createTemaWithDetails);
exports.default = router;
