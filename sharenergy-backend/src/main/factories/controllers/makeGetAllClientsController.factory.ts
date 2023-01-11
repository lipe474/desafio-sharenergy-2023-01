import { GetAllClientsController } from "../../../controllers";

const makeGetAllClientsController = (): GetAllClientsController =>
  new GetAllClientsController();

export { makeGetAllClientsController };
