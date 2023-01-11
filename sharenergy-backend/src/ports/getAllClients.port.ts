import { UserDTO } from "../dtos/user.dto";

export interface GetAllClientsPort {
  getAll(amount: number, skip: number): Promise<[UserDTO[], number]>;
}
