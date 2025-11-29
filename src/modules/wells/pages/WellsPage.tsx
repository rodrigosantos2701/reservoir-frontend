import { useTypeWellTargets } from "../hooks/useTypeWellTargets";
import { TypeWellTargetsTable } from "../ui/TypeWellTargetsTable";
import { TypeWellTargetForm } from "../ui/TypeWellTargetForm";

export function WellsPage() {
  const { data, isLoading, error } = useTypeWellTargets();

  return (
    <div className="flex flex-1 flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Type Well Targets
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Lista de type well targets cadastrados no sistema.
          </p>
        </div>
      </header>

      <TypeWellTargetForm />

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Erro ao carregar type well targets: {error.message}
        </div>
      )}

      {isLoading ? (
        <div className="space-y-2">
          <div className="h-10 w-1/3 animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-2/3 animate-pulse rounded bg-slate-200" />
        </div>
      ) : (
        <TypeWellTargetsTable typeWellTargets={data ?? []} />
      )}
    </div>
  );
}
