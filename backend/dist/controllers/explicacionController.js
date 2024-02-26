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
exports.createExplicacion = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createExplicacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { teoria_1, teoria_2, teoria_3, tema_id } = req.body;
        const newExplicacion = yield prisma.tb_explicacion.create({
            data: {
                teoria_1,
                teoria_2,
                teoria_3,
                tema: { connect: { id: tema_id } },
                create_date: new Date(),
                modify_date: new Date()
            },
        });
        return res.status(201).json(newExplicacion);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.createExplicacion = createExplicacion;
