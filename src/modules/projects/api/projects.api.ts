import { get, post } from "../../../api/client";
import {
  mapProject,
  mapProjects,
  type Project,
  type ProjectApi,
} from "../types/project.types";

export type CreateProjectPayload = {
  name_project: string;
  type_ccus_strategies_id: number;
};

export async function fetchProjects(): Promise<Project[]> {
  const data = await get<ProjectApi[]>("/api/v1/reservoir/projects");
  return mapProjects(data);
}

export async function createProject(
  payload: CreateProjectPayload
): Promise<Project> {
  const apiProject = await post<CreateProjectPayload, ProjectApi>(
    "/api/v1/reservoir/projects",
    payload
  );

  return mapProject(apiProject);
}
