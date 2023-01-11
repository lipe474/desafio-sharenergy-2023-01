import { GetClientByIdPort } from "../ports";

export class GetClientByIdUseCase {
  constructor(private readonly getClient: GetClientByIdPort) {}
  async execute(id: string) {
    try {
      const client = await this.getClient.getById(id);
      return client;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
