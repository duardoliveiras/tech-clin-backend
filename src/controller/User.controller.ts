import { Request, Response } from "express";
import { UserService } from "../service/User.service";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
      await this.userService.createUser(name, email, password);
      res.status(200).json({
        message: "Usuario criado",
      });
    } catch (err) {
      if (err.message == "duplicidade") {
        res.status(400).json({
          message: "Usuário já cadastrado",
        });
      } else {
        res.status(500).json({
          error: err.message,
        });
      }
    }
  };

  validateLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      await this.userService.validateLogin(email, password);
      res.status(200).json({
        message: "Login realizado com sucesso!",
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  };
}
