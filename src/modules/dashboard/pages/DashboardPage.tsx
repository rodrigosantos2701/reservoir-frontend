import { useDashboardData } from "../hooks/useDashboardData";
import { DashboardKpiCards } from "../ui/DashboardKpiCards";
import { ReservoirsWellsTable } from "../ui/ReservoirsWellsTable";

export function DashboardPage() {
  const { projectsCount, reservoirsCount, wellsCount, reservoirsWithWells } =
    useDashboardData();

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Overview of projects, reservoirs and well links.
        </p>
      </header>

      <DashboardKpiCards
        projectsCount={projectsCount}
        reservoirsCount={reservoirsCount}
        wellsCount={wellsCount}
      />

      <ReservoirsWellsTable items={reservoirsWithWells} />
    </div>
  );
}
