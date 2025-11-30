import { useState } from "react";
import { useTypeWellTargets } from "../hooks/useTypeWellTargets";
import { useReservoirs } from "../../reservoirs/hooks/useReservoirs";
import { useWells } from "../hooks/useWells";
import { WellForm } from "../ui/WellForm";
import { WellsTable } from "../ui/WellsTable";

export function WellsPage() {
  const { data: typeWellTargets, isLoading, error } = useTypeWellTargets();
  const {
    data: reservoirs,
    isLoading: isLoadingReservoirs,
    error: reservoirsError,
  } = useReservoirs();

  // Table filter (independent from the form)
  const [filterReservoirId, setFilterReservoirId] = useState<
    number | undefined
  >(undefined);

  // Controls the reservoir select used by the link form
  const [formReservoirId, setFormReservoirId] = useState<number | undefined>(
    undefined
  );

  const { wells, linkWellToReservoir } = useWells();

  return (
    <div className="flex flex-1 flex-col gap-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Wells</h1>
          <p className="mt-1 text-sm text-slate-600">
            Wells linked to reservoirs and type well targets.
          </p>
        </div>
      </header>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Error loading type well targets: {error.message}
        </div>
      )}

      {reservoirsError && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          Error loading reservoirs: {String(reservoirsError)}
        </div>
      )}

      {isLoading || isLoadingReservoirs ? (
        <div className="space-y-2">
          <div className="h-10 w-1/3 animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-8 w-2/3 animate-pulse rounded bg-slate-200" />
        </div>
      ) : (
        <>
          <WellForm
            reservoirs={reservoirs ?? []}
            typeWellTargets={typeWellTargets ?? []}
            selectedReservoirId={formReservoirId}
            onReservoirChange={setFormReservoirId}
            onLinkWellToReservoir={(input) => {
              linkWellToReservoir(input);
              setFormReservoirId(undefined);
            }}
          />

          <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
            <div>
              <span className="text-sm font-medium text-slate-700">
                Filter wells by reservoir
              </span>
              <p className="text-xs text-slate-500">
                This filter only affects the table below.
              </p>
            </div>
            <select
              className="w-64 rounded border px-3 py-2 text-sm disabled:bg-slate-100 disabled:text-slate-400"
              value={filterReservoirId ?? 0}
              disabled={!wells || wells.length === 0}
              onChange={(e) => {
                const value = Number(e.target.value);
                setFilterReservoirId(value === 0 ? undefined : value);
              }}
            >
              <option value={0}>All reservoirs</option>
              {(reservoirs ?? []).map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          <WellsTable
            wells={wells ?? []}
            reservoirs={reservoirs ?? []}
            selectedReservoirId={filterReservoirId}
          />
        </>
      )}
    </div>
  );
}
