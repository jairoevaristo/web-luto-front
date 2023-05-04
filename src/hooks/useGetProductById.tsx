import { useQuery, UseQueryResult } from "react-query";
import { reactQueryCacheTime } from "../config/react-query";
import { getProductByIdService, GetProductRequest } from "../services/get-product";
import { ResponseGetProduct } from "../types/ResponseGetProduct";

export const useGetProductById = ({ productId }: GetProductRequest): UseQueryResult<ResponseGetProduct> => {
  
  return useQuery(
    ["get-product-by-id"],
    () => getProductByIdService({ productId }),
    {
      cacheTime: reactQueryCacheTime(),
      retry: true,
    }
  );
};