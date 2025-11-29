import { useReservoirs } from "../hooks/useReservoirs";
import { ReservoirForm } from "../ui/ReservoirForm";
import { ReservoirsTable } from "../ui/ReservoirsTable";

export function ReservoirsPage() {
  const { data: reservoirs = [], isLoading, error } = useReservoirs();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Reservatórios</h1>
        <p className="text-sm text-slate-500">
          Listagem de reservatórios por projeto.
        </p>
      </header>

      <ReservoirForm />

      {error && (
        <p className="text-sm text-red-600">
          Erro ao carregar reservatórios: {(error as Error).message}
        </p>
      )}

      {isLoading ? (
        <div className="mt-4 space-y-2 rounded-lg bg-white p-4 shadow">
          <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        </div>
      ) : (
        <ReservoirsTable reservoirs={reservoirs} />
      )}
    </div>
  );
}
