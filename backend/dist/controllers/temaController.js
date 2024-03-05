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
exports.getTemasWithDetails = exports.createTemaWithDetails = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createTemaWithDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_tema, explicaciones, ejercicios } = req.body;
        const tema = yield prisma.tb_tema.create({
            data: {
                nombre_tema,
                tb_explicacion: {
                    create: explicaciones,
                },
                tb_ejercicio: {
                    create: ejercicios.map((ejercicio) => ({
                        enunciado: ejercicio.enunciado,
                        respuesta_1: {
                            create: ejercicio.respuestas[0],
                        },
                        respuesta_2: {
                            create: ejercicio.respuestas[1],
                        },
                        respuesta_3: {
                            create: ejercicio.respuestas[2],
                        },
                        respuesta_4: {
                            create: ejercicio.respuestas[3],
                        },
                    })),
                },
            },
            include: {
                tb_explicacion: true,
                tb_ejercicio: {
                    include: {
                        respuesta_1: true,
                        respuesta_2: true,
                        respuesta_3: true,
                        respuesta_4: true,
                    },
                },
            },
        });
        return res.status(201).json(tema);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.createTemaWithDetails = createTemaWithDetails;
const getTemasWithDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const temas = yield prisma.tb_tema.findMany({
            include: {
                tb_explicacion: true,
                tb_ejercicio: {
                    include: {
                        respuesta_1: true,
                        respuesta_2: true,
                        respuesta_3: true,
                        respuesta_4: true,
                    },
                },
            },
        });
        return res.status(200).json({ temas });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.getTemasWithDetails = getTemasWithDetails;
