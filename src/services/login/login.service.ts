import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../error/handleErros.errors";
import { tLogin, tLoginRes } from "../../interfaces/login.interfaces";
import { tUserRes } from "../../interfaces/user.interfaces";
import { User } from "../../models";
import { userSchemaResponse } from "../../schemas/user.schema";

export const loginService = async (payload: tLogin): Promise<tLoginRes> => {
  const user = await User.findOne({ email: payload.email }).select("+password");

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPassword: boolean = await compare(payload.password, user.password);

  if (!matchPassword) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: user.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user._id),
    }
  );

  const userResponse: tUserRes = userSchemaResponse.parse(user);

  return { token, user: userResponse };
};
