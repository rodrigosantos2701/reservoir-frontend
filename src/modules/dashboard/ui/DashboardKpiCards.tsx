type Props = {
  projectsCount: number;
  reservoirsCount: number;
  wellsCount: number;
};

export function DashboardKpiCards({
  projectsCount,
  reservoirsCount,
  wellsCount,
}: Props) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Projetos
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {projectsCount}
        </p>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Reservatórios
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {reservoirsCount}
        </p>
      </div>

      <div className="rounded-lg bg-white p-4 shadow">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Poços vinculados
        </p>
        <p className="mt-2 text-3xl font-semibold text-slate-900">
          {wellsCount}
        </p>
      </div>
    </section>
  );
}
