import { UserDTO } from "../dtos";

export interface CreateClientPort {
  create(data: UserDTO): Promise<void>;
}
