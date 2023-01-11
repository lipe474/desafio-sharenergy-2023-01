import { CreateClientAdapter } from "../../../adapters";

const makeCreateClientAdapter = (): CreateClientAdapter =>
  new CreateClientAdapter();

export { makeCreateClientAdapter };
