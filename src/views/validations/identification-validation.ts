import * as yup from "yup"

export const identificationValidation = yup.object({
    email: yup.string().email("Informe um e-mail válido").required("Este campo é obrigatório"),
    phone: yup.string().required("Este campo é obrigatório"),
    cpf: yup.string().max(14, "Informe um CPF válido").required("Este campo é obrigatório"),
    birthDate: yup.string().required("Este campo é obrigatório")
})