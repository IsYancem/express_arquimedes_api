// Suponiendo que usas Prisma, ejemplo de controlador en src/controllers/ExplicacionController.ts
import { Request, Response } from 'express';
import { prisma } from '../prisma/prismaClient';

export const updateExplicacionPhotos = async (req: Request, res: Response) => {
    const { id } = req.params; // ID de tb_explicacion
    const files: any = req.files; // Multer coloca los archivos subidos aquí

    try {
        const updateData: any = {};

        if (files.photo_teoria_1) {
            updateData.photo_teoria_1 = files.photo_teoria_1[0].path;
        }
        if (files.photo_teoria_2) {
            updateData.photo_teoria_2 = files.photo_teoria_2[0].path;
        }
        if (files.photo_teoria_3) {
            updateData.photo_teoria_3 = files.photo_teoria_3[0].path;
        }

        const updatedExplicacion = await prisma.tb_explicacion.update({
            where: { id: parseInt(id) },
            data: updateData,
        });

        res.json(updatedExplicacion);
    } catch (error: any) { // Especificar el tipo de error como 'any'
        res.status(500).send(error.message);
    }
};  