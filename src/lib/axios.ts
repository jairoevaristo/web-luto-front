import axios, { AxiosError } from 'axios'

export const api = axios.create({
    baseURL: 'https://webluto.azurewebsites.net/api'   
})

export interface ApiAxiosRequest<T> {
    success: boolean;
    message: string;
    entity: T;
}

export interface ApiAxiosRequestError<T> extends AxiosError<ApiAxiosRequest<T>> {};