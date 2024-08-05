import { Request, Response } from "express";
import { tUserRes } from "../interfaces/user.interfaces";
import { createUserService } from "./../services/users/createUser.service";
import { deleteUserService } from "./../services/users/deleteUser.service";

export const createUserControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser: tUserRes = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const deleteUserControler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(req.params.id);

  return res.status(204).send();
};
