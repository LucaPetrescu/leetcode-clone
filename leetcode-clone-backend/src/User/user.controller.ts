import { Request, Response, NextFunction } from "express";

import AuthController from "../Auth/Auth/auth.controller";

class UserController {
  constructor() {}

  async getUser(req: any, res: Response) {}

  async registerUser(req: Request, res: Response) {
    const {
      email,
      firstName,
      lastName,
      password,
    }: {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    } = req.body;
    const result = await AuthController.register(
      email,
      firstName,
      lastName,
      password
    );
    console.log(result);
    res.status(result.status).send(result);
  }

  async loginUser(req: Request, res: Response) {
    const { email, password }: { email: string; password: string } = req.body;
    const result = await AuthController.login(email, password);
    res.send(result);
  }
}

export default new UserController();
