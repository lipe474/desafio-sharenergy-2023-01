import { UserDTO } from "../dtos";

export const clientsMapper = (users: UserDTO[]): UserDTO[] => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    cpf: user.cpf,
  }));
};

export const clientMapper = (user: UserDTO): UserDTO => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    cpf: user.cpf,
  };
};
