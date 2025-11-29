import type { TypeWellTargetDTO } from "../types/typeWellTarget.types";
import type { z } from "zod";
import type { TypeWellTargetApiSchema } from "./typeWellTarget.schema";

export type TypeWellTargetApi = z.infer<typeof TypeWellTargetApiSchema>;

export function mapTypeWellTargetFromApi(
  api: TypeWellTargetApi
): TypeWellTargetDTO {
  return {
    id: api.id,
    name: api.name,
    description: api.description ?? "",
    internalCode: api.internal_code,
    createdAt: api.created_at,
    updatedAt: api.updated_at,
  };
}

export function mapTypeWellTargetsFromApi(
  list: TypeWellTargetApi[]
): TypeWellTargetDTO[] {
  return list.map(mapTypeWellTargetFromApi);
}
