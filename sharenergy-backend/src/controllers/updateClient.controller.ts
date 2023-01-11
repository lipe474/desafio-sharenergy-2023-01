import { Request, Response } from "express";
import { UpdateClientAdapter, GetClientByIdAdapter } from "../adapters";
import { UpdateClientUseCase } from "../usecases";

export class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, email, phone, address, cpf } = request.body;

    const deleteClient = new UpdateClientUseCase(
      new GetClientByIdAdapter(),
      new UpdateClientAdapter()
    );

    await deleteClient.execute(id, { name, email, phone, address, cpf });

    return response.status(204).send();
  }
}
