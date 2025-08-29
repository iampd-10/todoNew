import express, { Router } from "express";
import dotenv from "dotenv"
import { dbConnection } from "./src/config/dbconnection.js";
import userRouter from "./src/routes/userRoutes.js";


const app = express()
dotenv.config()
const port = process.env.PORT

app.use(express.json());
dbConnection()

app.get('/', (req, res) => {
  res.send(`Hello from the server listed on local host ${port}`);
});

app.use('/user', userRouter)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}}`)
});
