import { z } from "zod";

export const ExampleSchema = z.object({
  nome: z.string().min(3, "Insira pelo menos 3 caracteres"),
});
