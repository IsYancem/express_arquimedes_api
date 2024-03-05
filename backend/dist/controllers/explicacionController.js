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
exports.updateExplicacionPhotos = void 0;
const prismaClient_1 = require("../prisma/prismaClient");
const updateExplicacionPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // ID de tb_explicacion
    const files = req.files; // Multer coloca los archivos subidos aquí
    try {
        const updateData = {};
        if (files.photo_teoria_1) {
            updateData.photo_teoria_1 = files.photo_teoria_1[0].filename; // Cambiado de .path a .filename
        }
        if (files.photo_teoria_2) {
            updateData.photo_teoria_2 = files.photo_teoria_2[0].filename; // Cambiado de .path a .filename
        }
        if (files.photo_teoria_3) {
            updateData.photo_teoria_3 = files.photo_teoria_3[0].filename; // Cambiado de .path a .filename
        }
        const updatedExplicacion = yield prismaClient_1.prisma.tb_explicacion.update({
            where: { id: parseInt(id) },
            data: updateData,
        });
        res.json(updatedExplicacion);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.updateExplicacionPhotos = updateExplicacionPhotos;
