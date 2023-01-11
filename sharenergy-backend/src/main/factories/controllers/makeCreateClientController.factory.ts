import { CreateClientController } from "../../../controllers";

const makeCreateClientController = (): CreateClientController =>
  new CreateClientController();

export { makeCreateClientController };
