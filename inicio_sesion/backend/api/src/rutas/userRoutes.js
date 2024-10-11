
import express from "express";
import { registerUser, loginUser } from "../controladores/authController.js";
import { getUserById, updateUser, deleteUser } from "../controladores/userController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js"; 

const router = express.Router();

// Rutas de autenticación
router.post('/register', registerUser);
router.post('/login', loginUser);

// Rutas de usuario (requieren autenticación)
router.get('/users/:id', authenticateToken, getUserById);    
router.put('/users/:id', authenticateToken, updateUser);     
router.delete('/users/:id', authenticateToken, deleteUser);

// Exportar las rutas
export { router as userRoutes };