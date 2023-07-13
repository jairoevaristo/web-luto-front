import { useQuery, UseQueryResult } from "react-query";
import { reactQueryCacheTime } from "../config/react-query";
import { ResponseCreateSale } from "../types/ResponseCreateSale";
import { getAllSaleService } from "../services/get-all-sale";

export const useGetAllSale = (): UseQueryResult<ResponseCreateSale> => {

  return useQuery(
    ["get-all-sale"],
    () => getAllSaleService(),
    {
      cacheTime: reactQueryCacheTime(),
      retry: true,
    }
  );
};
