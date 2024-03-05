import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const createTemaWithDetails = async (req: Request, res: Response) => {
  try {
    const { nombre_tema, explicaciones, ejercicios } = req.body;

    const tema = await prisma.tb_tema.create({
      data: {
        nombre_tema,
        tb_explicacion: {
          create: explicaciones,
        },
        tb_ejercicio: {
          create: ejercicios.map((ejercicio: any) => ({
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
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

export const getTemasWithDetails = async (req: Request, res: Response) => {
  try {
    const temas = await prisma.tb_tema.findMany({
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
    return res.status(200).json({temas});
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
};