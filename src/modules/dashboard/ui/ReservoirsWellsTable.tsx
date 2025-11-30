type ReservoirWithWells = {
  reservoirId: number;
  reservoirName: string;
  wellsCount: number;
};

type Props = {
  items: ReservoirWithWells[];
};

export function ReservoirsWellsTable({ items }: Props) {
  return (
    <section className="rounded-lg bg-white p-4 shadow">
      <h2 className="text-sm font-semibold text-slate-800">
        Reservatórios x Poços
      </h2>
      <p className="mt-1 text-xs text-slate-500">
        Quantidade de poços vinculados por reservatório.
      </p>

      {items.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">
          Ainda não há reservatórios cadastrados ou vínculos de poços.
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-2 text-left">Reservatório</th>
                <th className="px-4 py-2 text-left">Qtde de poços</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.reservoirId} className="border-t">
                  <td className="px-4 py-2">{item.reservoirName}</td>
                  <td className="px-4 py-2">{item.wellsCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
