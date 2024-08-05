import { Router } from "express";
import {
  getAllCategoryControler,
  getCategoryControler,
} from "../controllers/category.controller";

const categoryRoutes: Router = Router();

categoryRoutes.get("", getAllCategoryControler);
categoryRoutes.get("/:id", getCategoryControler);

export default categoryRoutes;
