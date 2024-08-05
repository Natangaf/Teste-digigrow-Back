import { Request, Response, NextFunction } from "express";
import { AppError } from "../../error/handleErros.errors";
import mongoose from "mongoose";
import { User } from "../../models";

export const checkIfUserIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;

  if (id) {
    if (!mongoose.isValidObjectId(id)) {
      throw new AppError("Invalid user ID", 400);
    }

    const user = await User.findById(id);

    if (!user) {
      throw new AppError("User not found", 404);
    }
  }

  next();
};
