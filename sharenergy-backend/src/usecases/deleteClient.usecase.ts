import { DeleteClientPort, GetClientByIdPort } from "../ports";
import { AppError } from "../errors";

export class DeleteClientUseCase {
  constructor(
    private readonly getClient: GetClientByIdPort,
    private readonly deleteClient: DeleteClientPort
  ) {}
  async execute(id: string) {
    try {
      const client = await this.getClient.getById(id);

      if (!client) {
        throw new AppError("Client not found!");
      }

      await this.deleteClient.delete(id);
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
