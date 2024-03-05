// src/controllers/HistorialUserController.ts
import { Request, Response } from 'express';
import { prisma } from '../prisma/prismaClient'; // Asegúrate de que esta ruta sea correcta

export const createOrUpdateHistorial = async (req: Request, res: Response) => {
    const { user_id, puntaje, correctas, incorrectas } = req.body;
    const now = new Date();

    try {
        const existingHistorial = await prisma.tb_historial_user.findUnique({
            where: {
                id: parseInt(user_id), // Cambia user_id a id
            },
        });

        let historial;
        if (existingHistorial) {
            // Actualizar
            historial = await prisma.tb_historial_user.update({
                where: { id: parseInt(user_id) },
                data: { puntaje, correctas, incorrectas, modify_date: now },
            });
        } else {
            // Crear
            historial = await prisma.tb_historial_user.create({
                data: { user_id, puntaje, correctas, incorrectas, create_date: now, modify_date: now },
            });
        }

        res.json(historial);
    } catch (error: any) { // Especifica el tipo de error como 'any' o un tipo más específico si lo prefieres
        console.error(error);
        res.status(500).send(error.message);
    }
};
