import * as yup from "yup";

export let schema = yup.object().shape({
  name: yup.string(),
  username: yup.string(),
  email: yup.string(),
});

export let initialValues = {
  name: "",
  username: "",
  email: "",
};

export type FormValues = typeof initialValues;

export interface RandomUsers {
  name: {
    first: string;
    last: string;
  };
  email: string;
  login: {
    username: string;
  };
  dob: {
    age: number;
  };
  picture: {
    medium: string;
  };
}

export type Row = {
  [key: string]: any;
};

export type Column = {
  title: string;
  field: string;
};

export const columns: Column[] = [
  { title: "Imagem", field: "image" },
  { title: "Nome", field: "name" },
  { title: "Email", field: "email" },
  { title: "Username", field: "username" },
  { title: "Idade", field: "age" },
];
