import { prisma } from "../database/prismaClient";
import { UserDTO } from "../dtos";
import { clientsMapper } from "../mappers";
import { GetAllClientsPort } from "../ports";

export class GetAllClientsAdapter implements GetAllClientsPort {
  async getAll(amount: number, skip: number): Promise<[UserDTO[], number]> {
    const clients = await prisma.clients.findMany({
      take: amount,
      skip: skip,
      orderBy: {
        name: "asc",
      },
    });

    const totalUsers = await prisma.clients.count();

    return [clientsMapper(clients), totalUsers];
  }
}
