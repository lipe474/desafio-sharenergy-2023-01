import { Express } from "express";
import { prisma } from "../../database/prismaClient";
import {
  makeCreateClientController,
  makeDeleteClientController,
  makeGetAllClientsController,
  makeGetClientByIdController,
  makeUpdateClientController,
} from "../factories/controllers";

// export const setupRoutes = (app: Express) => {

//   app.post("/client", makeCreateClientController().handle);
//   app.delete("/client/:id", makeDeleteClientController().handle);
//   app.get("/clients", makeGetAllClientsController().handle);
//   app.get("/client/:id", makeGetClientByIdController().handle);
//   app.put("/client/:id", makeUpdateClientController().handle);
// };

export async function setupRoutes(app: Express) {
  
  app.post("/client", makeCreateClientController().handle);
  app.delete("/client/:id", makeDeleteClientController().handle);
  app.get("/clients", makeGetAllClientsController().handle);
  app.get("/client/:id", makeGetClientByIdController().handle);
  app.put("/client/:id", makeUpdateClientController().handle);
}
