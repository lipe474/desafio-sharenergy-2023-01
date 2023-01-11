import { GetClientByIdAdapter } from "../../../adapters";

const makeGetClientByIdAdapter = (): GetClientByIdAdapter =>
  new GetClientByIdAdapter();

export { makeGetClientByIdAdapter };
