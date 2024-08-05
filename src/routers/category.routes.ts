import { Router } from "express";
import {
  getAllCategoryControler,
  getCategoryControler,
  getNameCategoryControler,
} from "../controllers/category.controller";

const categoryRoutes: Router = Router();

categoryRoutes.get("/name", getNameCategoryControler);
categoryRoutes.get("", getAllCategoryControler);
categoryRoutes.get("/:id", getCategoryControler);

export default categoryRoutes;
