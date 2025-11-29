import type { ReservoirDTO } from "../types/reservoir.types";

type Props = {
  reservoirs: ReservoirDTO[];
};

export function ReservoirsTable({ reservoirs }: Props) {
  if (!reservoirs.length) {
    return (
      <p className="text-sm text-slate-500">Nenhum reservatório cadastrado.</p>
    );
  }

  return (
    <div className="mt-4 overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Project ID</th>
            <th className="px-4 py-2 text-left">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {reservoirs.map((r) => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-2">{r.id}</td>
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2 font-mono text-xs">{r.projectId}</td>
              <td className="px-4 py-2">
                {new Date(r.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
