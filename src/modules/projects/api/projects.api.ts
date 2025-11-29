import { get, post } from "../../../api/client";
import {
  type ProjectDTO,
  type ProjectApiResponseSchema,
} from "../types/project.types";
import {
  mapProjectFromApi,
  mapProjectsFromApi,
} from "../domain/project.mappers";

export type CreateProjectPayload = {
  name_project: string;
  type_ccus_strategies_id: number;
};

export async function fetchProjects(): Promise<ProjectDTO[]> {
  const data = await get<ProjectApiResponseSchema[]>(
    "/api/v1/reservoir/projects"
  );
  return mapProjectsFromApi(data);
}

export async function createProject(
  payload: CreateProjectPayload
): Promise<ProjectDTO> {
  const apiProject = await post<CreateProjectPayload, ProjectApiResponseSchema>(
    "/api/v1/reservoir/projects",
    payload
  );

  return mapProjectFromApi(apiProject);
}
