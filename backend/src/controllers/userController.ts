import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password, name, lastname, role_id } = req.body;
        
        // Verificar si ya existe un usuario con el mismo username
        const existingUser = await prisma.tb_user.findFirst({
            where: {
                username: username,
            },
        });

        // Si existe un usuario con el mismo username, devuelve un error
        if (existingUser) {
            return res.status(400).json({ error: 'El username ya está en uso' });
        }

        // Hash de la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear el nuevo usuario
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
        
        // Construir un nuevo objeto que no incluya la contraseña
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
        return res.status(500).json({ error: 'Se produjo un error inesperado' });
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

export const getUserByUsername = async (req: Request, res: Response) => {
    try {
        const { username } = req.body;

        // Buscar usuario por username
        const user = await prisma.tb_user.findFirst({
            where: {
                username: username,
            },
            select: { // Seleccionar específicamente los campos a devolver, excluyendo la contraseña
                id: true,
                username: true,
                email: true,
                name: true,
                lastname: true,
                role_id: true,
                create_date: true,
                modify_date: true,
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        return res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Se produjo un error inesperado' });
    }
};

export const getUsersNotDocente = async (req: Request, res: Response) => {
    try {
        // Primero, obtener el ID del rol "Docente"
        const docenteRole = await prisma.tb_role.findFirst({
            where: {
                name: 'Docente',
            },
        });

        if (!docenteRole) {
            return res.status(404).json({ error: 'Rol "Docente" no encontrado.' });
        }

        // Luego, buscar usuarios cuyo role_id no sea el de "Docente"
        const users = await prisma.tb_user.findMany({
            where: {
                role_id: {
                    not: docenteRole.id,
                },
            },
            select: {
                username: true,
                email: true,
                name: true,
                lastname: true,
            },
        });

        return res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'Se produjo un error inesperado.' });
    }
};


