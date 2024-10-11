import { db } from '../db/database.js'; // Asegúrate de que la ruta sea correcta
import { usuarios } from '../db/schema.js'; // Asegúrate de que la ruta sea correcta

// Función para obtener la información de un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL

        const user = await db.query.usuarios.findFirst({
            where: eq(usuarios.id, userId) // Asegúrate de que 'id' sea el nombre correcto en tu esquema
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json({ user });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Función para actualizar la información de un usuario
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL
        const { username, email } = req.body; // Obtener los nuevos datos desde el cuerpo de la solicitud

        // Validaciones básicas
        if (!username && !email) {
            return res.status(400).json({ message: "Se requiere al menos un campo para actualizar" });
        }

        // Actualizar el usuario en la base de datos
        const updatedUser = await db.update(usuarios).set({
            ...(username && { nombre: username }), // Actualiza el nombre si se proporciona
            ...(email && { email }) // Actualiza el correo si se proporciona
        }).where(eq(usuarios.id, userId)).returning();

        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json({ updatedUser });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Función para eliminar un usuario por ID
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL

        const deletedUser = await db.delete(usuarios).where(eq(usuarios.id, userId)).returning();

        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.status(200).json({ message: "Usuario eliminado correctamente" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error interno del servidor" });
    }
};