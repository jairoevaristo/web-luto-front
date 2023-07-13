import { getAllSaleEndpoint } from "../config/endpoints/sale";
import { api } from "../lib/axios";
import { ResponseCreateSale } from "../types/ResponseCreateSale";

export const getAllSaleService = async (): Promise<ResponseCreateSale> => {
  const { data } = await api.get<ResponseCreateSale>(getAllSaleEndpoint());
  
  return data;
}