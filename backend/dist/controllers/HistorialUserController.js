"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrUpdateHistorial = void 0;
const prismaClient_1 = require("../prisma/prismaClient"); // Asegúrate de que esta ruta sea correcta
const createOrUpdateHistorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_id, puntaje, correctas, incorrectas } = req.body;
    const now = new Date();
    try {
        const existingHistorial = yield prismaClient_1.prisma.tb_historial_user.findUnique({
            where: {
                id: parseInt(user_id), // Cambia user_id a id
            },
        });
        let historial;
        if (existingHistorial) {
            // Actualizar
            historial = yield prismaClient_1.prisma.tb_historial_user.update({
                where: { id: parseInt(user_id) },
                data: { puntaje, correctas, incorrectas, modify_date: now },
            });
        }
        else {
            // Crear
            historial = yield prismaClient_1.prisma.tb_historial_user.create({
                data: { user_id, puntaje, correctas, incorrectas, create_date: now, modify_date: now },
            });
        }
        res.json(historial);
    }
    catch (error) { // Especifica el tipo de error como 'any' o un tipo más específico si lo prefieres
        console.error(error);
        res.status(500).send(error.message);
    }
});
exports.createOrUpdateHistorial = createOrUpdateHistorial;
