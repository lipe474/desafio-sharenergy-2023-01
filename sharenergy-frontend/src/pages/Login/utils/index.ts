import * as yup from "yup";

export let schema = yup.object().shape({
  username: yup
    .string()
    .required("O usuário é obrigatório.")
    .test("username", "Usuário inválido.", (value) => {
      return value === "desafiosharenergy";
    }),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .test("password", "Senha inválida.", (value) => {
      return value === "sh@r3n3rgy";
    }),
  // validar o manter conectado
  checkbox: yup.boolean(),
});
