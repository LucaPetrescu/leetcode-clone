import { Request, Response, NextFunction } from "express";

import { AuthController } from "../Auth/Auth/auth.controller";

class UserController {
  private authController: AuthController | undefined;

  constructor(authController: AuthController) {
    this.authController = authController;
  }

  async getUser(req: any, res: Response) {}

  async registerUser(req: Request, res: Response) {
    try {
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
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async loginUser(req: Request, res: Response) {
    try {
      const { email, password }: { email: string; password: string } = req.body;
      console.log(typeof this.authController);
      const result = await this.authController.login(email);
      res.send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

export default new UserController();
