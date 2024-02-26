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
exports.createRole = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const role = yield prisma.tb_role.create({
            data: {
                name,
            },
        });
        return res.status(201).json(role);
    }
    catch (error) {
        // Chequea si el error es una instancia de Error y tiene una propiedad 'message'
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        // Si no es una instancia de Error, devuelve un mensaje de error genérico
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.createRole = createRole;
