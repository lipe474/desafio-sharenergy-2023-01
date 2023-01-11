import { Request, Response } from "express";
import { DeleteClientAdapter, GetClientByIdAdapter } from "../adapters";
import { DeleteClientUseCase } from "../usecases";

export class DeleteClientController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteClient = new DeleteClientUseCase(
      new GetClientByIdAdapter(),
      new DeleteClientAdapter()
    );

    await deleteClient.execute(id);

    return response.status(204).send();
  }
}
