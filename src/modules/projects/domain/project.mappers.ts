import type {
  ProjectDTO,
  ProjectApiResponseSchema,
} from "../types/project.types";

export function mapProjectFromApi(api: ProjectApiResponseSchema): ProjectDTO {
  return {
    id: api.id,
    projectId: api.project_id,
    name: api.name_project,
    strategyTypeId: api.type_ccus_strategies_id,
    createdAt: api.created_at,
  };
}

export function mapProjectsFromApi(
  list: ProjectApiResponseSchema[]
): ProjectDTO[] {
  return list.map(mapProjectFromApi);
}
