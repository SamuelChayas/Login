import jsonwebtoken from "jsonwebtoken";

const key = process.env.SECRET_KEY; // Clave secreta para verificar el token

// Middleware para verificar el token JWT
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Obtener el encabezado de autorización
    const token = authHeader && authHeader.split(' ')[1]; // Extraer el token del encabezado

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Se requiere un token." });
    }

    app.use((req, res, next) => {
        res.status(404).json({ error: 'Ruta no encontrada' });
    });

    // Verificar el token usando la clave secreta
    jsonwebtoken.verify(token, key, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token no válido." }); // Token inválido
        }

        req.user = user; // Guardar la información del usuario en la solicitud
        next(); // Pasar al siguiente middleware o ruta
    });
};