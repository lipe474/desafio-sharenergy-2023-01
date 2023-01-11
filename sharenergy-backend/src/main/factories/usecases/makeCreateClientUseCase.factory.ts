import { CreateClientUseCase } from "../../../usecases";
import { makeCreateClientAdapter } from "../adapters";

const makeCreateClientUseCase = () =>
  new CreateClientUseCase(makeCreateClientAdapter());

export { makeCreateClientUseCase };
