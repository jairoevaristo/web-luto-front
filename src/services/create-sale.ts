import { createSaleEndpoint } from "../config/endpoints/sale";
import { api, ApiAxiosRequest } from "../lib/axios"
import { CreateSale, ResponseCreateSale } from "../types/ResponseCreateSale";

export const createSaleService = async (sale: CreateSale) => {
    const { data } = await api.post<ApiAxiosRequest<ResponseCreateSale>>(
        createSaleEndpoint(),
        sale
    );

    return data;
}