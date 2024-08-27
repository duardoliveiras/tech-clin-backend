import { Router } from "express";
import { UserController } from "../controller/User.controller";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/criar-usuario", userController.createUser);

export { userRoutes };
