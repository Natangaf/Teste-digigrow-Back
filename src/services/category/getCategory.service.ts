import mongoose from "mongoose";
import { AppError } from "../../error/handleErros.errors";
import { Category } from "../../models";
import { ICategoryDocument } from "../../models/category.model";
export const getCategoryService = async (
  idCategory: string
): Promise<ICategoryDocument> => {
  if (!mongoose.isValidObjectId(idCategory)) {
    throw new AppError("Invalid ID format", 400);
  }

  const category: ICategoryDocument | null = await Category.findById(idCategory)
    .populate("videos")
    .exec();

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
