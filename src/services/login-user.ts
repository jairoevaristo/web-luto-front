import { loginUserEndpoint } from "../config/endpoints/user";
import { api, ApiAxiosRequest } from "../lib/axios"
import { ResponseLoginUser } from "../types/ResponseLoginUser";

export interface LoginUserRequest {
    email: string;
    password: string;
}

export const loginUserService = async ({ email, password }: LoginUserRequest) => {
    const { data } = await api.post<ApiAxiosRequest<ResponseLoginUser>>(
        loginUserEndpoint(),
        { 
            email, 
            password 
        }
    );

    return data;
}