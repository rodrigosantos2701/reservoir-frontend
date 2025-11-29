import type { ProjectDTO } from "../types/project.types";
import type { z } from "zod";
import { ProjectApiSchema } from "./project.schema";

export type ProjectApi = z.infer<typeof ProjectApiSchema>;

export function mapProjectFromApi(api: ProjectApi): ProjectDTO {
  return {
    id: api.id,
    projectId: api.project_id,
    name: api.name_project,
    strategyTypeId: api.type_ccus_strategies_id,
    createdAt: api.created_at,
  };
}

export function mapProjectsFromApi(list: ProjectApi[]): ProjectDTO[] {
  return list.map(mapProjectFromApi);
}
