import { useState } from "react";
import type { Well } from "../types/well.types";
import {
  linkWellToReservoirUseCase,
  type LinkWellToReservoirInput,
} from "../use-cases/linkWellToReservoir.use-case";

let wellsStore: Well[] = [];
let wellsIdCounter = 1;

export function useWells() {
  const [wells, setWells] = useState<Well[]>(() => wellsStore);

  function linkWellToReservoir(input: LinkWellToReservoirInput) {
    const newWell = linkWellToReservoirUseCase(
      input,
      () => wellsIdCounter++,
      () => new Date().toISOString()
    );

    wellsStore = [...wellsStore, newWell];
    setWells(wellsStore);
  }

  return {
    wells,
    linkWellToReservoir,
  };
}
