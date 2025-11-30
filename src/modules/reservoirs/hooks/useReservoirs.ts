import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchReservoirs,
  createReservoir,
  type CreateReservoirPayload,
} from "../api/reservoirs.api";
import { listReservoirsUseCase } from "../use-cases/listReservoirs.use-case";
import { createReservoirUseCase } from "../use-cases/createReservoir.use-case";

const RESERVOIRS_KEY = ["reservoirs"];

export function useReservoirs() {
  return useQuery({
    queryKey: RESERVOIRS_KEY,
    queryFn: () =>
      listReservoirsUseCase({ fetchReservoirsApi: fetchReservoirs }),
  });
}

export function useCreateReservoir() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateReservoirPayload) =>
      createReservoirUseCase(payload, {
        createReservoirApi: createReservoir,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESERVOIRS_KEY });
    },
  });
}
