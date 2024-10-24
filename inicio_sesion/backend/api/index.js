import express from "express";
import morgan from "morgan"; 
import { userRoutes } from "./src/rutas/userRoutes.js"; 

const app = express();
const port = 3333; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev')); 


app.use('/api', userRoutes); 


app.get('/', (req, res) => {
    res.send('¡Hola mundo!'); 
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`); 
});
