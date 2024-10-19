import express from 'express';
import { loginUser, postUsers } from '../controllers/userControllers.js';

const userRouter = express.Router();

// Route to create a new user
userRouter.post("/", postUsers);

// Route for user login
userRouter.post("/login", loginUser);

export default userRouter;
