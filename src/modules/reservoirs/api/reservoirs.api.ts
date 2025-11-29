import { get, post } from "../../../api/client";
import type { ReservoirDTO } from "../types/reservoir.types";
import {
  ReservoirApiListSchema,
  ReservoirApiSchema,
} from "../domain/reservoir.schema";
import {
  mapReservoirFromApi,
  mapReservoirsFromApi,
  type ReservoirApi,
} from "../domain/reservoir.mappers";

export type CreateReservoirPayload = {
  name_reservoir: string;
  project_id: string;
};

export async function fetchReservoirs(): Promise<ReservoirDTO[]> {
  const data = await get<ReservoirApi[]>("/api/v1/reservoir/reservoir_details");
  const parsed = ReservoirApiListSchema.parse(data);
  return mapReservoirsFromApi(parsed);
}

export async function createReservoir(
  payload: CreateReservoirPayload
): Promise<ReservoirDTO> {
  const apiReservoir = await post<CreateReservoirPayload, ReservoirApi>(
    "/api/v1/reservoir/reservoir_details",
    payload
  );
  const parsed = ReservoirApiSchema.parse(apiReservoir);
  return mapReservoirFromApi(parsed);
}
