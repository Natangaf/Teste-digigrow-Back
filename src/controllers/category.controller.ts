import { Request, Response } from "express";
import { getCategoryService } from "../services/category/getCategory.service";
import { ICategoryDocument } from "../models/category.model";
import { getAllCategoryService } from "../services/category/getAllCategory.service";
import { getNameCategoryService } from "../services/category/getNameCategory.service";

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
export const getNameCategoryControler = async (
  req: Request,
  res: Response
): Promise<Response> => {

    const categories: ICategoryDocument[] = await getNameCategoryService();

    return res.status(200).json(categories);

};
