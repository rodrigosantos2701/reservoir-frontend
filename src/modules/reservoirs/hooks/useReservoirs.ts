import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchReservoirs,
  createReservoir,
  type CreateReservoirPayload,
} from "../api/reservoirs.api";

const RESERVOIRS_KEY = ["reservoirs"];

export function useReservoirs() {
  return useQuery({
    queryKey: RESERVOIRS_KEY,
    queryFn: fetchReservoirs,
  });
}

export function useCreateReservoir() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateReservoirPayload) => createReservoir(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: RESERVOIRS_KEY });
    },
  });
}
