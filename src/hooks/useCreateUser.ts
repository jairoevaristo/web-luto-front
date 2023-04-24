import { useQuery, UseQueryResult } from "react-query";
import { useToast } from "./useToast";
import { reactQueryCacheTime } from "../config/react-query";
import { DataCreateUser } from "../context/FormStepsContext";
import { createUserService } from "../services/create-user";
import { ApiAxiosRequest, ApiAxiosRequestError } from "../lib/axios";
import { ResponseCreateUser } from "../types/ResponseCreateUser";

export const useCreateUser = (user: DataCreateUser): UseQueryResult<ApiAxiosRequest<ResponseCreateUser>> => {
    const { toastError, toastSuccess } = useToast()

    const formatedBirthDate = user.birthDate.split("/")
    const birthDateFormatedString = `${formatedBirthDate[2]}-${formatedBirthDate[1]}-${formatedBirthDate[0]}`
    const userData = { ...user, birthDate: birthDateFormatedString }

    return useQuery(
        ['create-user'],
        () => createUserService(userData),
        {
            enabled: false,
            cacheTime: reactQueryCacheTime(),
            retry: true,
            onError: (error: ApiAxiosRequestError<ResponseCreateUser>) => {
                toastError(error.response?.data.message)
            },
            onSuccess: (data) => {
                console.log({data})
                toastSuccess(data.message)
            }
        }
    )
}