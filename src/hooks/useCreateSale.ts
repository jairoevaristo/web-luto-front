import { useQuery, UseQueryResult } from "react-query";
import { useToast } from "./useToast";
import { reactQueryCacheTime } from "../config/react-query";
import { ApiAxiosRequest, ApiAxiosRequestError } from "../lib/axios";
import { CreateSale, ResponseCreateSale } from "../types/ResponseCreateSale";
import { createSaleService } from "../services/create-sale";

export const useCreateSale = (sale: CreateSale): UseQueryResult<ApiAxiosRequest<ResponseCreateSale>> => {
    const { toastError, toastSuccess } = useToast()

    return useQuery(
        ['create-sale'],
        () => createSaleService(sale),
        {
            enabled: false,
            cacheTime: reactQueryCacheTime(),
            retry: true,
            onError: (error: ApiAxiosRequestError<ResponseCreateSale>) => {
                toastError(error.response?.data.message)
            },
            onSuccess: (data) => {
                console.log({data})
                toastSuccess(data.message)
            }
        }
    )
}