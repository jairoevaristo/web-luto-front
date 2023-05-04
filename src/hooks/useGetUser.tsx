import { useQuery, UseQueryResult } from "react-query";
import { useToast } from "./useToast";
import { reactQueryCacheTime } from "../config/react-query";
import { getUserService } from "../services/get-user";
import { ApiAxiosRequest, ApiAxiosRequestError } from "../lib/axios";
import { ResponseGetUser } from "../types/ResponseGetUser";

export const useGetUser = (): UseQueryResult<ApiAxiosRequest<ResponseGetUser>> => {
  const { toastError } = useToast();

  return useQuery(
    ["get-user"],
    getUserService,
    {
      cacheTime: reactQueryCacheTime(),
      retry: true,
      onError: (error: ApiAxiosRequestError<ResponseGetUser>) => {
        toastError(error.response?.data.message);
      },
    }
  );
};