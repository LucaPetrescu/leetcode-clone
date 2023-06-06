import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { JWTGenerator } from "../JWT/JWTGenerator";
import UserSchema from "../../User/user.model";

export class AuthController {
  private static authController: AuthController;
  jwtGenerator: JWTGenerator = JWTGenerator.getInstance();
  private constructor() {}

  static getInstance() {
    if (!this.authController) {
      this.authController = new AuthController();
    }
    return this.authController;
  }

  async login(email: string) {
    console.log("aici");
    try {
      // const user = await UserSchema.findOne({ email });
      // //   this.jwtGenerator.generateAccessToken();
      // console.log(user);
      // return user;
      return "in login";
    } catch (error) {
      console.log(error);
    }
  }

  // async register(req: Request) {
  //   try {
  //     this.jwtGenerator.generateAccessToken();
  //   } catch (error) {}
  // }
}
