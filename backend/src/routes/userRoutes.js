import express from "express";
import { userRegistration,loginUser, logoutUser } from "../controller/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

userRouter.post("/register", userRegistration);
userRouter.get('/verify',verifyToken);
userRouter.post('/login', loginUser);
userRouter.post('/logout', logoutUser);

export default userRouter;
