import { useQuery, UseQueryResult } from "react-query";
import { reactQueryCacheTime } from "../config/react-query";
import { getAllProductsService } from "../services/get-all-products";
import { ResponseGetAllProducts } from "../types/ResponseGetAllProducts";

export const useGetAllProducts = (): UseQueryResult<ResponseGetAllProducts> => {

  return useQuery(
    ["get-all-products"],
    () => getAllProductsService(),
    {
      cacheTime: reactQueryCacheTime(),
      retry: true,
    }
  );
};
