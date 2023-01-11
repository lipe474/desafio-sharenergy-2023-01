import { GetAllClientsAdapter } from "../../../adapters";

const makeGetAllClientsAdapter = (): GetAllClientsAdapter =>
  new GetAllClientsAdapter();

export { makeGetAllClientsAdapter };
