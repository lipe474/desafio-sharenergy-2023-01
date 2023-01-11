import { Request, Response } from "express";
import { CreateClientAdapter } from "../adapters";
import { CreateClientUseCase } from "../usecases";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { name, email, phone, address, cpf } = request.body;

    const createClient = new CreateClientUseCase(new CreateClientAdapter());

    await createClient.execute({ name, email, phone, address, cpf });

    return response.status(201).send();
  }
}
