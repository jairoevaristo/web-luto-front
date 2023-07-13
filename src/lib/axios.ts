import axios, { AxiosError } from "axios";

export const api = axios.create({
    baseURL: 'https://localhost:7294/api'   
});

export const strapiApi = axios.create({
  baseURL: 'http://localhost:1337/api'   
});

export const getAuthorization = (token: string) => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export interface ApiAxiosRequest<T> {
  success: boolean;
  message: string;
  entity: T;
};

export interface ApiAxiosRequestError<T> extends AxiosError<ApiAxiosRequest<T>> {};

export interface ApiProductsAxiosRequest<L> {
  success: boolean;
  productList: L;
};

export interface ApiProductAxiosRequest<P> {
  success: boolean;
  product: P;
};