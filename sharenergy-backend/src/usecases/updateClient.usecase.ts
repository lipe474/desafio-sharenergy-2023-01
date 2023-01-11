import { UserDTO } from "../dtos";
import { AppError } from "../errors";
import { GetClientByIdPort, UpdateClientPort } from "../ports";

export class UpdateClientUseCase {
  constructor(
    private readonly getClient: GetClientByIdPort,
    private readonly updateClient: UpdateClientPort
  ) {}
  async execute(id: string, data: UserDTO) {
    try {
      const client = await this.getClient.getById(id);

      if (!client) {
        throw new AppError("Client not found");
      }

      await this.updateClient.update(id, data);
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
