import jwt from "jsonwebtoken";

const options = { expiresIn: "1h" };
const secretKey = process.env.SECRET_KEY || "";

class JWTGenerator {

 constructor() {}


  public generateAccessToken(id: string) {
    return jwt.sign(id, secretKey, options);
  }

  public verifyAccessToken(accessToken: string) {
    return jwt.verify(accessToken, secretKey);
  }
}

export default new JWTGenerator()
