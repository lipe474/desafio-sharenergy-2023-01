import { UserDTO } from "../dtos";
import { prisma } from "../database/prismaClient";
import { UpdateClientPort } from "../ports";

export class UpdateClientAdapter implements UpdateClientPort {
  async update(id: string, { name, email, phone, address, cpf }: UserDTO) {
    await prisma.clients.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        phone,
        address,
        cpf,
      },
    });
  }
}
