import { Request, Response } from "express";
import { UserService } from "../service/User.service";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = async (req: Request, res: Response) => {
    try {
      await this.userService.createUser();
      res.status(200).json({
        message: "Usuario criado",
      });
    } catch (err) {
      res.status(500).json({
        error: err,
      });
    }
  };
}
