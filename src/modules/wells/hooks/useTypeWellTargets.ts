import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createTypeWellTarget,
  type CreateTypeWellTargetPayload,
  fetchTypeWellTargets,
} from "../api/typeWellTargets.api";
import type { TypeWellTargetDTO } from "../types/typeWellTarget.types";

export const TYPE_WELL_TARGETS_KEY = ["typeWellTargets"] as const;

export function useTypeWellTargets() {
  return useQuery<TypeWellTargetDTO[], Error>({
    queryKey: TYPE_WELL_TARGETS_KEY,
    queryFn: fetchTypeWellTargets,
  });
}

export function useCreateTypeWellTarget() {
  const queryClient = useQueryClient();

  return useMutation<TypeWellTargetDTO, Error, CreateTypeWellTargetPayload>({
    mutationFn: createTypeWellTarget,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TYPE_WELL_TARGETS_KEY });
    },
  });
}
