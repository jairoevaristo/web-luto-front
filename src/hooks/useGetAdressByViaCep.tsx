import { useQuery, UseQueryResult } from "react-query";
import { reactQueryCacheTime } from "../config/react-query";
import { viaCepService } from "../services/viacep-service";
import { ResponseViaCep } from "../types/ResponseViaCep";
import { useToast } from "./useToast";

export const useGetAdressByViaCep = (cep: string): UseQueryResult<ResponseViaCep> => {
  const { toastError } = useToast()

  return useQuery(
    ['via-cep', cep],
    () => viaCepService(cep),
    {
      enabled: false,
      cacheTime: reactQueryCacheTime(),
      retry: false,
      onError: () => {
        toastError('Houve um erro ao encontrar seu endereço, digite nos campos');
      }
    }
  )
};
