import type { ProjectDTO } from "../types/project.types";
import type { CreateProjectPayload } from "../api/projects.api";

export type CreateProjectInput = CreateProjectPayload;

export type CreateProjectDependencies = {
  createProjectApi: (payload: CreateProjectPayload) => Promise<ProjectDTO>;
};

export async function createProjectUseCase(
  input: CreateProjectInput,
  deps: CreateProjectDependencies
): Promise<ProjectDTO> {
  const { createProjectApi } = deps;

  return createProjectApi(input);
}
