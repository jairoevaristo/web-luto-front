import { useCallback } from 'react';
import { toast } from 'react-toastify'

export const useToast = () => {
    const toastSuccess = useCallback((message = 'Sucesso') => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }, [])

    const toastError = useCallback((message = 'Erro ao realizar ação, tente novamente') => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }, [])

    return {
        toastSuccess,
        toastError
    }
}