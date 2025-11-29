import { useForm } from "react-hook-form";
import { useCreateProject } from "../hooks/useProjects";

type ProjectFormValues = {
  name_project: string;
  type_ccus_strategies_id: number;
};

export function ProjectForm() {
  const { register, handleSubmit, reset } = useForm<ProjectFormValues>();
  const { mutateAsync, isPending, error } = useCreateProject();

  async function onSubmit(values: ProjectFormValues) {
    await mutateAsync({
      name_project: values.name_project,
      type_ccus_strategies_id: Number(values.type_ccus_strategies_id),
    });

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-4 rounded-lg shadow"
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Nome do projeto *
        </label>
        <input
          {...register("name_project", { required: true })}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Projeto X"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Tipo de estratégia CCUS (ID)
        </label>
        <input
          type="number"
          {...register("type_ccus_strategies_id", { valueAsNumber: true })}
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">
          Erro ao salvar projeto: {(error as Error).message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-white disabled:opacity-60"
      >
        {isPending ? "Salvando..." : "Salvar projeto"}
      </button>
    </form>
  );
}
