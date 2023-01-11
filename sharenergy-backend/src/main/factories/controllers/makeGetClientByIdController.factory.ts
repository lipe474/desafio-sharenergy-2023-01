import { GetClientByIdController } from "../../../controllers";

const makeGetClientByIdController = (): GetClientByIdController =>
  new GetClientByIdController();

export { makeGetClientByIdController };
