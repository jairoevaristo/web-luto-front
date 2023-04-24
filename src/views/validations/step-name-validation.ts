import * as yup from "yup";

export const stepNameValidation = yup.object({
  firstName: yup.string().required("Este campo é obrigatório"),
  lastName: yup.string().required("Este campo é obrigatório"),
}).required();