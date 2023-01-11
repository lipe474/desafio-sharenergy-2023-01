import { UserDTO } from "../dtos";
import { CreateClientPort } from "../ports";

export class CreateClientUseCase {
  constructor(private readonly createClient: CreateClientPort) {}
  async execute(data: UserDTO) {
    try {
      await this.createClient.create(data);
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
