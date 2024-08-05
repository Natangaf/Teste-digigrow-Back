import mongoose from "mongoose";
import { AppError } from "../../error/handleErros.errors";
import { Category } from "../../models";
import { ICategoryDocument } from "../../models/category.model";

export const getNameCategoryService = async (): Promise<
  ICategoryDocument[]
> => {
  
  const category: ICategoryDocument[] = await Category.find();

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};
