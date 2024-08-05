import { Router } from "express";
import { ensureTokenIsValidMiddleware } from "../middlewares/ensureTokenIsValid.Middleware";
import {
  createdVideoControler,
  getAllVideoControler,
  getVideoControler,
} from "../controllers/video.controller";
import { validBodyMiddleware } from "../middlewares/validBody.Middleware";
import { videoReq } from "../schemas/video.schemas";

const videoRoutes: Router = Router();

videoRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  validBodyMiddleware(videoReq),
  createdVideoControler
);
videoRoutes.get("/:id", getVideoControler);
videoRoutes.get("", getAllVideoControler);

export default videoRoutes;
