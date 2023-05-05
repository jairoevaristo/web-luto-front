import * as yup from "yup";

export const addressValidation = yup.object({
    zipCode: yup.string().min(6, "Informe um cep valido").required("Este campo é obrigatório"),
    addressLine: yup.string().required("Este campo é obrigatório"),
    addressLineNumber: yup.string().required("Este campo é obrigatório"),
    neighborhood: yup.string().required("Este campo é obrigatório")
}).required();