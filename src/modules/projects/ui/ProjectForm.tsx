import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProject } from "../hooks/useProjects";

const projectFormSchema = z.object({
  name_project: z
    .string()
    .min(1, "Project name is required")
    .max(255, "Project name is too long"),
  type_ccus_strategies_id: z
    .number()
    .int("Strategy ID must be an integer")
    .positive("Strategy ID must be positive"),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export function ProjectForm() {
  const { register, handleSubmit, reset, formState } =
    useForm<ProjectFormValues>({
      resolver: zodResolver(projectFormSchema),
      defaultValues: {
        name_project: "",
        type_ccus_strategies_id: undefined,
      },
    });

  const { errors } = formState;
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
        <label className="block text-sm font-medium mb-1">Project name *</label>
        <input
          {...register("name_project")}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Project X"
        />
        {errors.name_project && (
          <p className="mt-1 text-xs text-red-600">
            {errors.name_project.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          CCUS strategy type (ID) *
        </label>
        <input
          type="number"
          {...register("type_ccus_strategies_id", { valueAsNumber: true })}
          className="w-full border rounded px-3 py-2 text-sm"
        />
        {errors.type_ccus_strategies_id && (
          <p className="mt-1 text-xs text-red-600">
            {errors.type_ccus_strategies_id.message}
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600">
          Error saving project: {(error as Error).message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-white disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save project"}
      </button>
    </form>
  );
}
