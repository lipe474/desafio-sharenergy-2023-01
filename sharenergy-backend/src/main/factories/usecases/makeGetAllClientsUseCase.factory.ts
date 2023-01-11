import { GetAllClientsUseCase } from "../../../usecases";
import { makeGetAllClientsAdapter } from "../adapters";

const makeGetAllClientsUseCase = () =>
  new GetAllClientsUseCase(makeGetAllClientsAdapter());

export { makeGetAllClientsUseCase };
