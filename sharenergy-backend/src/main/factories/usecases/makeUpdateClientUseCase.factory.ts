import { UpdateClientUseCase } from "../../../usecases";
import { makeGetClientByIdAdapter, makeUpdateClientAdapter } from "../adapters";

const makeUpdateClientUseCase = () =>
  new UpdateClientUseCase(
    makeGetClientByIdAdapter(),
    makeUpdateClientAdapter()
  );

export { makeUpdateClientUseCase };
