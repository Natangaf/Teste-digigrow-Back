import mongoose from "mongoose";
import { AppError } from "../../error/handleErros.errors";
import User from "../../models/user.model";
import Category, { ICategoryDocument } from "../../models/category.model";
import Video, { IVideoDocument } from "../../models/video.model";
import { tVideoReq } from "../../interfaces/video.interfaces";

export const createVideoService = async (
  payload: tVideoReq,
  userId: string
): Promise<IVideoDocument> => {
  if (!mongoose.isValidObjectId(userId)) {
    throw new AppError("Invalid user ID format", 400);
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError("User not found", 404);
  }

  const categoryPromises = payload.category.map(
    async (categoryName): Promise<ICategoryDocument> => {
      let category = await Category.findOne({ name: categoryName });

      if (!category) {
        category = new Category({ name: categoryName });
        await category.save();
      }

      return category;
    }
  );

  const categoryIds: ICategoryDocument[] = await Promise.all(categoryPromises);

  const video: IVideoDocument = new Video({
    ...payload,
    user: user._id,
    category: categoryIds.map((category) => category._id),
  });

  await video.save();

  for (const category of categoryIds) {
    if (!category.videos.includes(video.id)) {
      category.videos.push(video.id);
      await category.save();
    }
  }

  return video;
};
