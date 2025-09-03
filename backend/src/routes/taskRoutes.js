import express from "express";
import { createTask, getTasks} from "../controller/taskController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const taskRouter = express.Router();

taskRouter.post("/create", authenticateToken, createTask);
taskRouter.get("/all", authenticateToken, getTasks);

export default taskRouter;