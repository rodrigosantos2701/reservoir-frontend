import { get, post } from "../../../api/client";
import type { TypeWellTargetDTO } from "../types/typeWellTarget.types";
import {
  TypeWellTargetApiListSchema,
  TypeWellTargetApiSchema,
} from "../domain/typeWellTarget.schema";
import {
  mapTypeWellTargetsFromApi,
  mapTypeWellTargetFromApi,
} from "../domain/typeWellTarget.mappers";

export async function fetchTypeWellTargets(): Promise<TypeWellTargetDTO[]> {
  const response = await get("/api/v1/reservoir/type_well_targets");
  const parsed = TypeWellTargetApiListSchema.parse(response);
  return mapTypeWellTargetsFromApi(parsed);
}

export type CreateTypeWellTargetPayload = {
  name: string;
  description?: string | null;
  internal_code: number;
};

export async function createTypeWellTarget(
  payload: CreateTypeWellTargetPayload
): Promise<TypeWellTargetDTO> {
  const response = await post<CreateTypeWellTargetPayload, unknown>(
    "/api/v1/reservoir/type_well_targets",
    payload
  );
  const parsed = TypeWellTargetApiSchema.parse(response);
  return mapTypeWellTargetFromApi(parsed);
}
