import { useProjects } from "../hooks/useProjects";
import { ProjectForm } from "../ui/ProjectForm";
import { ProjectsTable } from "../ui/ProjectsTable";

export function ProjectsPage() {
  const { data: projects = [], isLoading, error } = useProjects();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold">Projetos</h1>
        <p className="text-sm text-slate-500">
          Cadastro e listagem de projetos.
        </p>
      </header>

      <ProjectForm />

      {error && (
        <p className="text-sm text-red-600">
          Erro ao carregar projetos: {(error as Error).message}
        </p>
      )}

      <ProjectsTable projects={projects} isLoading={isLoading} />
    </div>
  );
}
