import { useState } from "react";
import type { Well } from "../types/well.types";

let wellsStore: Well[] = [];
let wellsIdCounter = 1;

type LinkWellToReservoirInput = {
  name: string;
  reservoirId: number;
  typeWellTargetId?: number | null;
};

export function useWells() {
  const [wells, setWells] = useState<Well[]>(() => wellsStore);

  function linkWellToReservoir(input: LinkWellToReservoirInput) {
    const now = new Date().toISOString();

    const newWell: Well = {
      id: wellsIdCounter++,
      name: input.name,
      reservoirId: input.reservoirId,
      typeWellTargetId: input.typeWellTargetId ?? null,
      createdAt: now,
    };

    wellsStore = [...wellsStore, newWell];
    setWells(wellsStore);
  }

  return {
    wells,
    linkWellToReservoir,
  };
}
