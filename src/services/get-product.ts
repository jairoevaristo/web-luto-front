import { getProductByIdEndpoint } from "../config/endpoints/product";
import { API_KEY } from "../constracts/strapi";
import { api, strapiApi } from "../lib/axios";
import { ResponseGetProduct } from "../types/ResponseGetProduct";

export interface GetProductRequest {
  productId: string;
};

export const getProductByIdService = async ({ productId }: GetProductRequest): Promise<ResponseGetProduct> => {
  const { data } = await strapiApi.get<ResponseGetProduct>(
    getProductByIdEndpoint(productId),
    {
      headers: {
        Authorization: 'Bearer ' + API_KEY
      },
    }
  );

  return data;
};
