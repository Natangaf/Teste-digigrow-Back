import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional().nullable(),
});

export const userSchemaResponse = userSchema.omit({
  id: true,
  password: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
export const userSchemaRequests = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
