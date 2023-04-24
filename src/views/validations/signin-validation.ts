import * as yup from "yup";

export const signinSchemaValidator = yup.object({
  email: yup.string().email("Informe um e-mail válido").required("Este campo é obrigatório"),
  password: yup.string().required("Este campo é obrigatório").min(8, "A senha deve ter pelo menos 8 caracteres"),
}).required();