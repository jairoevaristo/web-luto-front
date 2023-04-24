import * as yup from 'yup'

export const securityValidation = yup.object({
    password: yup.string().min(8, "Sua senha deve ter no mínimo 8 caratectes").required("Este campo é obrigatório"),
    confirmedPassword: yup.string()
     .oneOf([yup.ref('password')], 'As senhas são diferentes').required("Este campo é obrigatório")
})