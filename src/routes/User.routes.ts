import { Router } from "express";
import { UserController } from "../controller/User.controller";
import { validateSchema } from "../middleware/validationMiddleware";
import { createUserSchema } from "../validators/userValidators";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post(
  "/criar-usuario",
  validateSchema(createUserSchema),
  userController.createUser
);

export { userRoutes };
