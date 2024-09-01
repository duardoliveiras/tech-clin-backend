import { Router } from "express";
import { UserController } from "../controller/User.controller";
import {
  validateCreateUserSchema,
  validateLoginSChema,
} from "../middleware/validationMiddleware";
import { createUserSchema, loginSchema } from "../validators/userValidators";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  "/criar-usuario",
  validateCreateUserSchema(createUserSchema),
  userController.createUser
);

userRoutes.post(
  "/login",
  validateLoginSChema(loginSchema),
  userController.validateLogin
);

export { userRoutes };
