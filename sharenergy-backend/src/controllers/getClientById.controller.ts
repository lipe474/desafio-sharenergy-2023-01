import { Request, Response } from "express";
import { GetClientByIdAdapter } from "../adapters";
import { GetClientByIdUseCase } from "../usecases";

export class GetClientByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getClient = new GetClientByIdUseCase(new GetClientByIdAdapter());

    const client = await getClient.execute(id);

    return response.json(client);
  }
}
