import type { Well } from "../types/well.types";

export type LinkWellToReservoirInput = {
  name: string;
  reservoirId: number;
  typeWellTargetId?: number | null;
};

export function linkWellToReservoirUseCase(
  input: LinkWellToReservoirInput,
  generateId: () => number,
  now: () => string
): Well {
  const id = generateId();

  return {
    id,
    name: input.name,
    reservoirId: input.reservoirId,
    typeWellTargetId: input.typeWellTargetId ?? null,
    createdAt: now(),
  };
}
