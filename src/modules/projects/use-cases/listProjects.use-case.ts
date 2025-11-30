import type { ProjectDTO } from "../types/project.types";

export type ListProjectsDependencies = {
  fetchProjectsApi: () => Promise<ProjectDTO[]>;
};

export async function listProjectsUseCase(
  deps: ListProjectsDependencies
): Promise<ProjectDTO[]> {
  const { fetchProjectsApi } = deps;

  const projects = await fetchProjectsApi();
  return projects;
}
