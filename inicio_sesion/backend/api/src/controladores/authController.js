import { generatePassword, validatePassword } from '../utils/passwordUtils.js';
import { usuarios } from '../db/schema.js';
import jsonwebtoken from "jsonwebtoken";


const key = process.env.SECRET_KEY;

export const registerUser = async (req, res) => {
    try {
        const { username, email, password, password2 } = req.body;
        if (!username || !password || !password2 || !email) {
            return res.status(400).json({ message: "Se requiere nombre de usuario, correo electrónico y contraseña." });
        }
        if (password !== password2) {
            return res.status(400).json({ message: "Ambas contraseñas deben coincidir" });
        }

        const result = await generatePassword(password);
        if (!result.salt || !result.hash) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }

        const created = await db.insert(usuarios).values({
            nombre: username,
            email,
            password: result.hash,
            salt: result.salt,
            created_at: new Date(),
            role_id: 2
        }).returning();

        return res.status(201).json({ created });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Se requiere nombre de usuario y contraseña" });
        }

        const user = await db.query.usuarios.findFirst({
            where: eq(usuarios.nombre, username)
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const result = await validatePassword(password, user.salt, user.password);
        if (!result.valid) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const token = jsonwebtoken.sign(
            { user },
            key,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ token, user });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};