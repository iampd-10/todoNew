import express from "express";
import { createTask, getByName, getTasks, getbyId, updateByField,updateTask, deleteTask} from "../controller/taskController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.post("/create", authenticateToken, createTask);
taskRouter.get("/all", authenticateToken, getTasks);
taskRouter.get("/id/:id", authenticateToken, getbyId);
taskRouter.get("/name/:title", authenticateToken, getByName);
taskRouter.put("/updatefull/:id", authenticateToken, updateTask);
taskRouter.patch("/update/:id", authenticateToken, updateByField);
taskRouter.delete("/delete/:id", authenticateToken, deleteTask);


export default taskRouter;