import type { ReservoirDTO } from "../types/reservoir.types";
import type { z } from "zod";
import { ReservoirApiSchema } from "./reservoir.schema";

export type ReservoirApi = z.infer<typeof ReservoirApiSchema>;

export function mapReservoirFromApi(api: ReservoirApi): ReservoirDTO {
  return {
    id: api.id,
    name: api.name_reservoir,
    projectId: api.project_id,
    createdAt: api.created_at,
  };
}

export function mapReservoirsFromApi(list: ReservoirApi[]): ReservoirDTO[] {
  return list.map(mapReservoirFromApi);
}
