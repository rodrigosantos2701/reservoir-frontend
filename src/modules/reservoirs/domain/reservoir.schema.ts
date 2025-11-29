import { z } from "zod";

export const ReservoirApiSchema = z.object({
  name_reservoir: z.string(),
  project_id: z.string(),
  id: z.number(),
  created_at: z.string(),
});

export const ReservoirApiListSchema = z.array(ReservoirApiSchema);
