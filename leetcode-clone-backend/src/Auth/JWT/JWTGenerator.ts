import jwt from "jsonwebtoken";

const options = { expiresIn: "1h" };
const secretKey = process.env.SECRET_KEY || "";

export class JWTGenerator {
  private static jwtGenerator: JWTGenerator;

  private constructor() {}

  static getInstance() {
    if (!this.jwtGenerator) {
      this.jwtGenerator = new JWTGenerator();
    }

    return this.jwtGenerator;
  }

  public generateAccessToken(id: string) {
    return jwt.sign(id, secretKey, options);
  }

  public verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, secretKey);
  }
}
