import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReservoirDTO } from "../../reservoirs/types/reservoir.types";
import type { TypeWellTargetDTO } from "../types/typeWellTarget.types";

const wellFormSchema = z.object({
  name: z.string().min(1, "Nome do poço é obrigatório"),
  reservoirId: z
    .number({ message: "Selecione um reservatório" })
    .int()
    .positive("Reservatório inválido"),
  typeWellTargetId: z
    .number({ message: "Selecione um type well target" })
    .int()
    .positive()
    .optional()
    .or(z.literal(NaN).transform(() => undefined)),
});

type WellFormValues = z.infer<typeof wellFormSchema>;

type Props = {
  reservoirs: ReservoirDTO[];
  typeWellTargets: TypeWellTargetDTO[];
  selectedReservoirId?: number;
  onReservoirChange: (reservoirId: number) => void;
  onLinkWellToReservoir: (input: {
    name: string;
    reservoirId: number;
    typeWellTargetId?: number | null;
  }) => void;
};

export function WellForm({
  reservoirs,
  typeWellTargets,
  selectedReservoirId,
  onReservoirChange,
  onLinkWellToReservoir,
}: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WellFormValues>({
    resolver: zodResolver(wellFormSchema),
    defaultValues: {
      name: "",
      reservoirId: 0,
    },
  });

  async function onSubmit(values: WellFormValues) {
    // TO-DO: enviar vínculo de poço x reservatório para API
    onLinkWellToReservoir({
      name: values.name,
      reservoirId: values.reservoirId,
      typeWellTargetId: values.typeWellTargetId,
    });

    reset({
      name: "",
      reservoirId: 0,
      typeWellTargetId: undefined,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg bg-white p-4 shadow"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="mb-1 block text-sm font-medium">
            Nome do poço *
          </label>
          <select
            {...register("name")}
            className="w-full rounded border px-3 py-2 text-sm"
            defaultValue=""
          >
            <option value="">Selecione um nome</option>
            {typeWellTargets.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="md:col-span-1">
          <label className="mb-1 block text-sm font-medium">
            Reservatório *
          </label>
          <select
            {...register("reservoirId", { valueAsNumber: true })}
            className="w-full rounded border px-3 py-2 text-sm"
            onChange={(e) => {
              const value = Number(e.target.value);
              onReservoirChange(value);
            }}
            value={selectedReservoirId ?? 0}
          >
            <option value={0}>Selecione um reservatório</option>
            {reservoirs.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
          {errors.reservoirId && (
            <p className="mt-1 text-xs text-red-600">
              {errors.reservoirId.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      >
        Vincular poço ao reservatório
      </button>
    </form>
  );
}
