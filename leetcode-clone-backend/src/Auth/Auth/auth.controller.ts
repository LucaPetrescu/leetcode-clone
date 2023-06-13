import UserSchema from "../../User/user.model";
import PasswordService from "../../Services/PasswordService";

class AuthController {
  constructor() {}

  async login(email: string, password: string): Promise<any> {
    try {
      const user = await UserSchema.findOne({ email });

      if (!user) {
        throw new Error("User not found");
      }

      let isValidPassword: Promise<boolean>;
      const userPassword: string | undefined = user.password;

      if (typeof userPassword === "undefined") {
        throw new Error("Please provide a password");
      }

      isValidPassword = PasswordService.validatePassword(
        password,
        userPassword
      );

      if (!isValidPassword) {
        throw new Error("Username or password is invalid");
      }
      return {
        status: 200,
        message: "Login Successful",
      };
    } catch (error) {
      return error;
    }
  }

  async register(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ) {
    try {
      const user = await UserSchema.findOne({ email });
      if (user?.email === email) {
        throw new Error("This email is already in use");
      }

      const hashedPassword: string = await PasswordService.hashPassword(
        password
      );
      console.log("aici", hashedPassword);
      const newUser = await UserSchema.create({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });
      newUser.save();
      return {
        status: 200,
        message: "User created successfully",
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }
}

export default new AuthController();
