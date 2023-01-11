import { UserDTO } from "../dtos";
import { prisma } from "../database/prismaClient";
import { CreateClientPort } from "../ports";

export class CreateClientAdapter implements CreateClientPort {
  async create({ name, email, phone, address, cpf }: UserDTO) {
    try {
      await prisma.clients.create({
        data: {
          name,
          email,
          phone,
          address,
          cpf,
        },
      });
    } catch (error: any) {
      throw Error(error.message);
    }
  }
}
