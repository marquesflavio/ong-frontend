import { z } from "zod";

export const OngSchema = z.object({
  nome: z.string().min(3, "Insira pelo menos 3 caracteres"),
  imagem: z.string(),
  proposito: z.string().min(3, "Insira o segmento da ONG"),
});

export type ongFormData = z.infer<typeof OngSchema>;
