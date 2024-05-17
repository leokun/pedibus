import { z } from "zod";

export const User = z.object({
  id: z.number(),
  email: z.string().email().max(256),
  name: z.string().max(256).optional(),
});

export type User = z.infer<typeof User>;
