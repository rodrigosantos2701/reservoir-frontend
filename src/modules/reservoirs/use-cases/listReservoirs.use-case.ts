import type { ReservoirDTO } from "../types/reservoir.types";

export type ListReservoirsDependencies = {
  fetchReservoirsApi: () => Promise<ReservoirDTO[]>;
};

export async function listReservoirsUseCase(
  deps: ListReservoirsDependencies
): Promise<ReservoirDTO[]> {
  const { fetchReservoirsApi } = deps;

  const reservoirs = await fetchReservoirsApi();
  return reservoirs;
}
