import type { ReservoirDTO } from "../types/reservoir.types";
import type { CreateReservoirPayload } from "../api/reservoirs.api";

export type CreateReservoirInput = CreateReservoirPayload;

export type CreateReservoirDependencies = {
  createReservoirApi: (
    payload: CreateReservoirPayload
  ) => Promise<ReservoirDTO>;
};

export async function createReservoirUseCase(
  input: CreateReservoirInput,
  deps: CreateReservoirDependencies
): Promise<ReservoirDTO> {
  const { createReservoirApi } = deps;

  return createReservoirApi(input);
}
