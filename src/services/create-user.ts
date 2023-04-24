import { createUserEndpoint } from "../config/endpoints/user";
import { DataCreateUser } from "../context/FormStepsContext";
import { api, ApiAxiosRequest } from "../lib/axios"
import { ResponseCreateUser } from "../types/ResponseCreateUser";

export const createUserService = async (user: DataCreateUser) => {
    const { data } = await api.post<ApiAxiosRequest<ResponseCreateUser>>(
        createUserEndpoint(),
        user
    );

    return data;
}