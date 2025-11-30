import type { Well } from "../types/well.types";
import type { ReservoirDTO } from "../../reservoirs/types/reservoir.types";

type Props = {
  wells: Well[];
  reservoirs: ReservoirDTO[];
  selectedReservoirId?: number;
};

export function WellsTable({ wells, reservoirs, selectedReservoirId }: Props) {
  const filteredWells = selectedReservoirId
    ? wells.filter((well) => well.reservoirId === selectedReservoirId)
    : wells;

  if (!filteredWells.length) {
    return (
      <p className="text-sm text-slate-500">
        Nenhum poço encontrado para o filtro atual.
      </p>
    );
  }

  return (
    <div className="mt-4 overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Reservatório</th>
            <th className="px-4 py-2 text-left">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {filteredWells.map((well) => {
            const reservoir = reservoirs.find((r) => r.id === well.reservoirId);

            return (
              <tr key={well.id} className="border-t">
                <td className="px-4 py-2">{well.id}</td>
                <td className="px-4 py-2">{well.name}</td>
                <td className="px-4 py-2">{reservoir?.name ?? "-"}</td>
                <td className="px-4 py-2">
                  {new Date(well.createdAt).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
