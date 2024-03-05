"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/users', userController_1.createUser);
router.post('/users/login', userController_1.loginUser);
router.post('/loginByUsername', userController_1.getUserByUsername);
router.get('/usersNotDocente', userController_1.getUsersNotDocente); // Agregar esta línea
exports.default = router;
