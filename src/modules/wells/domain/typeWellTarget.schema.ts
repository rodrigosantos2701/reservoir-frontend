import { z } from "zod";

export const TypeWellTargetApiSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  internal_code: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const TypeWellTargetApiListSchema = z.array(TypeWellTargetApiSchema);
