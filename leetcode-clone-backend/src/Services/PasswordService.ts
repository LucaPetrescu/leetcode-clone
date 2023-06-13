import { compare, hash } from "bcrypt";

class PasswordService {
  private static readonly BCRYPT_ROUNDS = 10;

  public async hashPassword(password: string): Promise<string> {
    return hash(password, PasswordService.BCRYPT_ROUNDS);
  }

  public async validatePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}

export default new PasswordService();
