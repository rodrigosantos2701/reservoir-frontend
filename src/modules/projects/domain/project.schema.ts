import { z } from "zod";

export const ProjectApiSchema = z.object({
  name_project: z.string(),
  type_ccus_strategies_id: z.number(),
  id: z.number(),
  project_id: z.string(),
  created_at: z.string(),
});

export const ProjectApiListSchema = z.array(ProjectApiSchema);
