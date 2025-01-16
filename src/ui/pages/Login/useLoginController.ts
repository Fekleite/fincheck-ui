import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha deve conter pelo menos 8 dígitos"),
});

type LoginFormData = z.infer<typeof loginFormSchema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log({ data });
  });

  return { handleSubmit, register, errors };
}
