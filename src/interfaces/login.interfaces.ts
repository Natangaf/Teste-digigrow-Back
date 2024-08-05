import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";
import { tUserRes } from "./user.interfaces";

export type tLogin = z.infer<typeof loginSchema>;

export interface tLoginRes {
  token: string;
  user: tUserRes;
}
