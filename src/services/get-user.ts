import { getUserEndpoint } from "../config/endpoints/user";
import { api } from "../lib/axios";
import { ResponseGetUser } from "../types/ResponseGetUser";

export const getUserService = async (): Promise<ResponseGetUser> => {
  const { data } = await api.get<ResponseGetUser>(getUserEndpoint());
  
  return data;
}