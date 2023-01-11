import { DeleteClientUseCase } from "../../../usecases";
import { makeDeleteClientAdapter, makeGetClientByIdAdapter } from "../adapters";

const makeDeleteClientUseCase = () =>
  new DeleteClientUseCase(
    makeGetClientByIdAdapter(),
    makeDeleteClientAdapter()
  );

export { makeDeleteClientUseCase };
