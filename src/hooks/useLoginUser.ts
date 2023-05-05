import { useQuery, UseQueryResult } from "react-query";
import { reactQueryCacheTime } from "../config/react-query";
import { ApiAxiosRequest, ApiAxiosRequestError } from "../lib/axios";
import { loginUserService, LoginUserRequest } from "../services/login-user";
import { ResponseLoginUser } from "../types/ResponseLoginUser";
import { useToast } from "./useToast";

export const useLoginUser = ({ email, password }: LoginUserRequest): UseQueryResult<ApiAxiosRequest<ResponseLoginUser>> => {
   const { toastError, toastSuccess } = useToast();

   return useQuery(
    ['login-user'],
    () => loginUserService({ email, password }),
    {
      enabled: false,
      cacheTime: reactQueryCacheTime(),
      retry: false,
      onError: (error: ApiAxiosRequestError<ResponseLoginUser>) => {
         toastError(error.response?.data.message)
      },
      onSuccess: (data) => {
         toastSuccess(data?.message)
      }
    }
   )
}