import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateReservoir } from "../hooks/useReservoirs";

const reservoirFormSchema = z.object({
  name_reservoir: z.string().min(1, "Reservoir name is required"),
  project_id: z.string().min(1, "Project ID is required"),
});

type ReservoirFormValues = z.infer<typeof reservoirFormSchema>;

export function ReservoirForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<ReservoirFormValues>({
      resolver: zodResolver(reservoirFormSchema),
      defaultValues: {
        name_reservoir: "",
        project_id: "",
      },
    });

  const { errors } = formState;
  const { mutateAsync, isPending, error } = useCreateReservoir();

  async function onSubmit(values: ReservoirFormValues) {
    await mutateAsync({
      name_reservoir: values.name_reservoir,
      project_id: values.project_id,
    });

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg bg-white p-4 shadow"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">
          Nome do reservatório *
        </label>
        <input
          {...register("name_reservoir")}
          className="w-full rounded border px-3 py-2 text-sm"
          placeholder="Reservatório A"
        />
        {errors.name_reservoir && (
          <p className="mt-1 text-xs text-red-600">
            {errors.name_reservoir.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Project ID *</label>
        <input
          {...register("project_id")}
          className="w-full rounded border px-3 py-2 text-sm font-mono"
          placeholder="UUID do projeto"
        />
        {errors.project_id && (
          <p className="mt-1 text-xs text-red-600">
            {errors.project_id.message}
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">
          Erro ao salvar reservatório: {(error as Error).message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center rounded bg-slate-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
      >
        {isPending ? "Salvando..." : "Salvar reservatório"}
      </button>
    </form>
  );
}
