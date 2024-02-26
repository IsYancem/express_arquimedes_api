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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, name, lastname, role_id } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(password, salt);
        const newUser = yield prisma.tb_user.create({
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
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usernameOrEmail, password } = req.body;
        // Buscar usuario por username o email
        const user = yield prisma.tb_user.findFirst({
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
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // Obtener el nombre del rol asociado al usuario
        const role = yield prisma.tb_role.findUnique({
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
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ error: error.message });
        }
        return res.status(500).json({ error: 'An unexpected error occurred' });
    }
});
exports.loginUser = loginUser;
