import { Router } from "express";
import { createUserControler } from "./../controllers/users.controllers";
import { validBodyMiddleware } from "../middlewares/validBody.Middleware";
import { verifyEmailExistMiddleware } from "./../middlewares/user/verifyEmailExist.Middleware";
import { userSchemaRequests } from "../schemas/user.schema";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  verifyEmailExistMiddleware,
  validBodyMiddleware(userSchemaRequests),
  createUserControler
);

export default userRoutes;
