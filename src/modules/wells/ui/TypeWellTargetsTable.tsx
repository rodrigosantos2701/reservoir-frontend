import type { TypeWellTargetDTO } from "../types/typeWellTarget.types";

type Props = {
  typeWellTargets: TypeWellTargetDTO[];
};

export function TypeWellTargetsTable({ typeWellTargets }: Props) {
  if (!typeWellTargets.length) {
    return (
      <p className="text-sm text-slate-500">
        Nenhum type well target cadastrado.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow mt-4">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Código interno</th>
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Criado em</th>
          </tr>
        </thead>
        <tbody>
          {typeWellTargets.map((target) => (
            <tr key={target.id} className="border-t">
              <td className="px-4 py-2">{target.id}</td>
              <td className="px-4 py-2">{target.name}</td>
              <td className="px-4 py-2">{target.internalCode}</td>
              <td className="px-4 py-2">{target.description}</td>
              <td className="px-4 py-2">
                {new Date(target.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
