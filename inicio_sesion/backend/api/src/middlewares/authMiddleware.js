import jsonwebtoken from "jsonwebtoken";
import { SECRET_KEY } from '../config/env.js'; 

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Se requiere un token." });
    }

   
    jsonwebtoken.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Token no válido." }); 
        }

        req.user = user; 
        next(); 
    });
};
