import { getProductByIdEndpoint } from "../config/endpoints/product";
import { api } from "../lib/axios";
import { ResponseGetProduct } from "../types/ResponseGetProduct";

export interface GetProductRequest {
  productId: number;
};

export const getProductByIdService = async ({ productId }: GetProductRequest): Promise<ResponseGetProduct> => {
  const { data } = await api.get<ResponseGetProduct>(
    getProductByIdEndpoint(),
    { params: { productId } }
  );

  return data;
};
