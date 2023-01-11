import { prisma } from "../database/prismaClient";
import { DeleteClientPort } from "../ports";

export class DeleteClientAdapter implements DeleteClientPort {
  async delete(id: string): Promise<void> {
    await prisma.clients.delete({
      where: {
        id,
      },
    });
  }
}
