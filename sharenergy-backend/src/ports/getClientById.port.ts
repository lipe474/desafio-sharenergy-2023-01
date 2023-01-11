import { UserDTO } from "../dtos";

export interface GetClientByIdPort {
  getById(id: string): Promise<UserDTO | undefined>;
}
