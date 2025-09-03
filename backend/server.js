import express, { Router } from "express";
import dotenv from "dotenv"
import { dbConnection } from "./src/config/dbconnection.js";
import userRouter from "./src/routes/userRoutes.js";
import taskRouter from "./src/routes/taskRoutes.js";
import cors from "cors";


const app = express()
dotenv.config()
const port = process.env.PORT

app.use(express.json());
dbConnection()

app.use( cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
  res.send(`Hello from the server listed on local host ${port}`);
});

app.use('/user', userRouter)
app.use('/task', taskRouter)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}}`)
});
