import { getAllProductsEndpoint } from "../config/endpoints/product";
import { API_KEY } from "../constracts/strapi";
import { api, strapiApi } from "../lib/axios";
import { ResponseGetAllProducts } from "../types/ResponseGetAllProducts";

export const getAllProductsService = async (): Promise<ResponseGetAllProducts> => {
  const { data } = await strapiApi.get<ResponseGetAllProducts>(
    getAllProductsEndpoint(),
    {
      headers: {
        Authorization: 'Bearer ' + API_KEY
      },
    }
  );
  return data;
}
