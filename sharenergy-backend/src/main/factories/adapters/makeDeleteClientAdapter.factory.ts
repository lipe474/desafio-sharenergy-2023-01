import { DeleteClientAdapter } from "../../../adapters";

const makeDeleteClientAdapter = (): DeleteClientAdapter =>
  new DeleteClientAdapter();

export { makeDeleteClientAdapter };
