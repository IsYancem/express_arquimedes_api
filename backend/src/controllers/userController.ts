import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password, name, lastname, role_id } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await prisma.tb_user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                name,
                lastname,
                role_id,
            },
        });
        
        // Construye un nuevo objeto que no incluya la contraseña
        const userWithoutPassword = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            name: newUser.name,
            lastname: newUser.lastname,
            role_id: newUser.role_id,
            create_date: newUser.create_date,
            modify_date: newUser.modify_date,
        };
        
        return res.status(201).json(userWithoutPassword);        
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { usernameOrEmail, password } = req.body;

        // Buscar usuario por username o email
        const user = await prisma.tb_user.findFirst({
            where: {
                OR: [
                    { username: usernameOrEmail },
                    { email: usernameOrEmail }
                ],
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Comparar la contraseña hasheada con la proporcionada
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        
        // Obtener el nombre del rol asociado al usuario
        const role = await prisma.tb_role.findUnique({
            where: {
                id: user.role_id,
            },
            select: {
                name: true,
            },
        });

        // Construir un nuevo objeto que incluya el nombre del rol
        const userWithRole = {
            id: user.id,
            username: user.username,
            email: user.email,
            name: user.name,
            lastname: user.lastname,
            role: role ? role.name : null, 
            create_date: user.create_date,
            modify_date: user.modify_date,
        };

        return res.status(200).json({ user: userWithRole });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
};