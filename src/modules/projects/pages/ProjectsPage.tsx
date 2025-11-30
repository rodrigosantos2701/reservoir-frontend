import { useProjects } from "../hooks/useProjects";
import { ProjectForm } from "../ui/ProjectForm";
import { ProjectsTable } from "../ui/ProjectsTable";

export function ProjectsPage() {
  const { data: projects = [], isLoading, error } = useProjects();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Projects</h1>
        <p className="text-sm text-slate-500">Projects creation and listing.</p>
      </header>

      <ProjectForm />

      {error && (
        <p className="text-sm text-red-600">
          Error loading projects: {(error as Error).message}
        </p>
      )}

      {isLoading ? (
        <div className="mt-4 space-y-2 rounded-lg bg-white p-4 shadow">
          <div className="h-4 w-1/3 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        </div>
      ) : (
        <ProjectsTable projects={projects} />
      )}
    </div>
  );
}
