import { prisma } from "../database/prismaClient";
import { UserDTO } from "../dtos";
import { clientMapper } from "../mappers";
import { GetClientByIdPort } from "../ports";

export class GetClientByIdAdapter implements GetClientByIdPort {
  async getById(id: string): Promise<UserDTO | undefined> {
    const client = await prisma.clients.findFirst({
      where: {
        id,
      },
    });
    console.log(client);
    if (!client) {
      return;
    }

    return clientMapper(client);
  }
}
