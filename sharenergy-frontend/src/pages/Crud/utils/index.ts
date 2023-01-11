import * as yup from "yup";
import { VerifyCPF } from "../../../utils/validateCpf";
import { validateEmail } from "../../../utils/validateEmail";

export let schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .test("email", "Email inválido", (value) => {
      if (value) {
        return validateEmail(value);
      }
      return false;
    }),
  phone: yup.string().required("Telefone é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  cpf: yup
    .string()
    .required("Cpf é obrigatório")
    .test("cpf", "Cpf inválido", (value) => {
      if (value) {
        return VerifyCPF(value);
      }
      return false;
    }),
});

export let initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  cpf: "",
};

export type FormValues = typeof initialValues;

export interface Clients {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

export type Row = {
  [key: string]: any;
};

export type Column = {
  title: string;
  field: string;
};

export const columns: Column[] = [
  { title: "Nome", field: "name" },
  { title: "Email", field: "email" },
  { title: "Telefone", field: "phone" },
  { title: "Ações", field: "actions" },
];

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "37,5rem",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export type Snackbar = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};
