import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createRole = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const role = await prisma.tb_role.create({
      data: {
        name,
      },
    });
    return res.status(201).json(role);
  } catch (error) {
    // Chequea si el error es una instancia de Error y tiene una propiedad 'message'
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    // Si no es una instancia de Error, devuelve un mensaje de error genérico
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};