import mongoose from "mongoose";
import User, { IUser } from "../../models/user.model";
import { AppError } from "../../error/handleErros.errors";

export const deleteUserService = async (userId: string): Promise<void> => {
    if (!mongoose.isValidObjectId(userId)) {
        throw new AppError("Invalid user ID format", 400);
    }

    const user: IUser | null = await User.findById(userId);

    if (!user) {
        throw new AppError("User not found", 404);
    }

    user.deletedAt = new Date(); 

    await user.save(); 
};
