import { AppError } from "../../error/handleErros.errors";
import Category, { ICategoryDocument } from "../../models/category.model";

export const getAllCategoryService = async (
  page: number,
  perPage: number
): Promise<ICategoryDocument[]> => {
  if (page <= 0 || perPage <= 0) {
    throw new AppError(
      "Page number and items per page must be greater than zero",
      400
    );
  }
  const skip = (page - 1) * perPage;
  const limit = perPage;

  const categories = await Category.find()
    .skip(skip)
    .limit(limit)
    .populate("videos")
    .exec();

  return categories;
};
