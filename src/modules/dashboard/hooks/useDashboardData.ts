import { useMemo } from "react";
import { useProjects } from "../../projects";
import { useReservoirs } from "../../reservoirs/hooks/useReservoirs";
import { useWells } from "../../wells/hooks/useWells";

export function useDashboardData() {
  const { data: projects } = useProjects();
  const { data: reservoirs } = useReservoirs();
  const { wells } = useWells();

  const stats = useMemo(() => {
    const projectsCount = projects?.length ?? 0;
    const reservoirsCount = reservoirs?.length ?? 0;
    const wellsCount = wells.length;

    const reservoirsById = new Map<
      number,
      { name: string; wellsCount: number }
    >();

    (reservoirs ?? []).forEach((r) => {
      reservoirsById.set(r.id, { name: r.name, wellsCount: 0 });
    });

    wells.forEach((well) => {
      const current = reservoirsById.get(well.reservoirId);
      if (current) {
        current.wellsCount += 1;
      }
    });

    const reservoirsWithWells = Array.from(reservoirsById.entries()).map(
      ([id, value]) => ({
        reservoirId: id,
        reservoirName: value.name,
        wellsCount: value.wellsCount,
      })
    );

    return {
      projectsCount,
      reservoirsCount,
      wellsCount,
      reservoirsWithWells,
    };
  }, [projects, reservoirs, wells]);

  return stats;
}
