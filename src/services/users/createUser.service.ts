import { tUserReq, tUserRes } from "../../interfaces/user.interfaces";
import { User } from "../../models";
import { userSchemaResponse } from "../../schemas/user.schema";

export const createUserService = async (
  payload: tUserReq
): Promise<tUserRes> => {
  const user = new User(payload);

  await user.save();

  const userResponse: tUserRes = userSchemaResponse.parse(user);

  return userResponse;
};
