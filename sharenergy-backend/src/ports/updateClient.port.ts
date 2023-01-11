import { UserDTO } from "../dtos";

export interface UpdateClientPort {
  update(id: string, data: UserDTO): Promise<void>;
}
