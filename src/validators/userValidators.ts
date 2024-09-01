import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("Endereço de email inválido"),
    password: z.string().min(8, "A senha deve ter ao menos 8 caracteres"),
  }),
});

// Infer -> retorna um tipo a partir de um objeto.
export type CreateUserSchema = z.infer<typeof createUserSchema>;
