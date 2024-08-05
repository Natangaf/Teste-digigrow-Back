import { Request, Response } from "express";
import { loginService } from "./../services/login/login.service";
import { tLoginRes } from "../interfaces/login.interfaces";

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: tLoginRes = await loginService(req.body);

  return res.status(200).json(token);
};
