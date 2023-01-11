import { GetAllClientsPort } from "../ports";

export class GetAllClientsUseCase {
  constructor(private readonly getClients: GetAllClientsPort) {}
  async execute(amount: number, skip: number) {
    try {
      const clients = await this.getClients.getAll(amount, skip);
      return clients;
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
