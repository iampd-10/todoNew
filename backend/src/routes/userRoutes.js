import express from "express";
import { userRegistration } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.post("/register", userRegistration);
userRouter.get('/verify',verifyToken);

export default userRouter;
