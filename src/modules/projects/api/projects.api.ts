import { get, post } from "../../../api/client";
import { type ProjectDTO } from "../types/project.types";
import {
  mapProjectFromApi,
  mapProjectsFromApi,
  type ProjectApi,
} from "../domain/project.mappers";
import {
  ProjectApiListSchema,
  ProjectApiSchema,
} from "../domain/project.schema";

export type CreateProjectPayload = {
  name_project: string;
  type_ccus_strategies_id: number;
};

export async function fetchProjects(): Promise<ProjectDTO[]> {
  const data = await get<ProjectApi[]>("/api/v1/reservoir/projects");
  const parsed = ProjectApiListSchema.parse(data);
  return mapProjectsFromApi(parsed);
}

export async function createProject(
  payload: CreateProjectPayload
): Promise<ProjectDTO> {
  const apiProject = await post<CreateProjectPayload, ProjectApi>(
    "/api/v1/reservoir/projects",
    payload
  );
  const parsed = ProjectApiSchema.parse(apiProject);
  return mapProjectFromApi(parsed);
}
