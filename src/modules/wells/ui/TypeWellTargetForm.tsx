import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateTypeWellTarget } from "../hooks/useTypeWellTargets";

const typeWellTargetFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  internal_code: z
    .number()
    .int("Internal code must be an integer")
    .positive("Internal code must be positive"),
});

type TypeWellTargetFormValues = z.infer<typeof typeWellTargetFormSchema>;

export function TypeWellTargetForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeWellTargetFormValues>({
    resolver: zodResolver(typeWellTargetFormSchema),
    defaultValues: {
      name: "",
      description: "",
      internal_code: 0,
    },
  });

  const { mutateAsync, isPending } = useCreateTypeWellTarget();

  async function onSubmit(values: TypeWellTargetFormValues) {
    await mutateAsync({
      name: values.name,
      description: values.description || null,
      internal_code: values.internal_code,
    });

    reset({ name: "", description: "", internal_code: 0 });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white p-4 rounded-lg shadow"
    >
      <div>
        <label className="block text-sm font-medium mb-1">
          Type well target name *
        </label>
        <input
          {...register("name")}
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Type Well Target X"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Internal code</label>
        <input
          type="number"
          {...register("internal_code", { valueAsNumber: true })}
          className="w-full border rounded px-3 py-2 text-sm"
        />
        {errors.internal_code && (
          <p className="mt-1 text-xs text-red-600">
            {errors.internal_code.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input
          type="text"
          {...register("description")}
          className="w-full border rounded px-3 py-2 text-sm"
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-white disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save type well target"}
      </button>
    </form>
  );
}
