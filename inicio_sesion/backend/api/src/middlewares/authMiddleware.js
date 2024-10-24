import jsonwebtoken from "jsonwebtoken";
import { SECRET_KEY } from '../config/env.js'; 

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Se requiere un token." });
    }

<<<<<<< HEAD
   
    jsonwebtoken.verify(token, SECRET_KEY, (err, user) => {
=======
    app.use((req, res, next) => {
        res.status(404).json({ error: 'Ruta no encontrada' });
    });

    // Verificar el token usando la clave secreta
    jsonwebtoken.verify(token, key, (err, user) => {
>>>>>>> 6f340c4127e48ff28b982a06d480d69874feb55c
        if (err) {
            return res.status(403).json({ message: "Token no válido." }); 
        }

<<<<<<< HEAD
        req.user = user; 
        next(); 
=======
        req.user = user; // Guardar la información del usuario en la solicitud
        next(); // Pasar al siguiente middleware o ruta
>>>>>>> 6f340c4127e48ff28b982a06d480d69874feb55c
    });
};
