import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error/handleErros.errors";
import { User } from "../../models";

export const verifyEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (email) {
    const findUser = await User.findOne({ email });

    if (findUser) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
};
