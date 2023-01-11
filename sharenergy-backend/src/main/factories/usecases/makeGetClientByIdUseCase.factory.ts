import { GetClientByIdUseCase } from "../../../usecases";
import { makeGetClientByIdAdapter } from "../adapters";

const makeGetClientByIdUseCase = () =>
  new GetClientByIdUseCase(makeGetClientByIdAdapter());

export { makeGetClientByIdUseCase };
