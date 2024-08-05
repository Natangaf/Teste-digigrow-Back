import { Request, Response } from "express";
import { getCategoryService } from "../services/category/getCategory.service";
import { ICategoryDocument } from "../models/category.model";
import { getAllCategoryService } from "../services/category/getAllCategory.service";

export const getCategoryControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
    const category: ICategoryDocument | null = await getCategoryService(req.params.id);

    return res.status(200).json(category);

};

export const getAllCategoryControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
    const page = Number(req.query.page) || 1;
    const perPage = Number(req.query.perPage) || 5;

    const categories: ICategoryDocument[] = await getAllCategoryService(page, perPage);

    return res.status(200).json(categories);

};
