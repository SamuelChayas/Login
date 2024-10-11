import express from "express";
import morgan from "morgan"; // Middleware para registrar solicitudes HTTP
import { userRoutes } from "./src/rutas/userRoutes.js"; // Importar rutas de usuario

const app = express();
const port = 3333; // Puerto en el que escuchará el servidor

app.use(express.json()); 
app.use(morgan('dev')); 

// Rutas
app.use('/api', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola mundo!'); 
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); 
});