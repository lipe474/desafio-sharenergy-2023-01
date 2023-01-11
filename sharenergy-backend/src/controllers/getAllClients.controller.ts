import { Request, Response } from "express";
import { GetAllClientsAdapter } from "../adapters";
import { GetAllClientsUseCase } from "../usecases";

export class GetAllClientsController {
  async handle(request: Request, response: Response) {
    const { amount, skip } = request.query;

    const getClients = new GetAllClientsUseCase(new GetAllClientsAdapter());

    const clients = await getClients.execute(Number(amount), Number(skip));

    return response.json(clients);
  }
}
