import { getAllProductsEndpoint } from "../config/endpoints/product";
import { api } from "../lib/axios";
import { ResponseGetAllProducts } from "../types/ResponseGetAllProducts";

export const getAllProductsService = async (): Promise<ResponseGetAllProducts> => {
  const { data } = await api.get<ResponseGetAllProducts>(getAllProductsEndpoint());
  return data;
}
