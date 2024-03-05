// src/controllers/explicacionController.ts
import { Request, Response } from 'express';
import db from '../path/to/your/database/configuration'; // Ajusta esta ruta a tu configuración de base de datos real

async function addImageToExplicacion(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.body; // Asegúrate de incluir el 'id' de la explicación en el cuerpo de la petición
        const updates: { [key: string]: string } = {};

        if (req.files['photo_teoria_1']) {
            updates.photo_teoria_1 = `/photo_theory/${req.files['photo_teoria_1'][0].filename}`;
        }
        if (req.files['photo_teoria_2']) {
            updates.photo_teoria_2 = `/photo_theory/${req.files['photo_teoria_2'][0].filename}`;
        }
        if (req.files['photo_teoria_3']) {
            updates.photo_teoria_3 = `/photo_theory/${req.files['photo_teoria_3'][0].filename}`;
        }

        // Actualizar la base de datos con las nuevas rutas
        await db.tb_explicacion.update({
            where: { id: parseInt(id) },
            data: updates,
        });

        res.status(200).json({ message: 'Imagen(es) agregada(s) correctamente.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { addImageToExplicacion };