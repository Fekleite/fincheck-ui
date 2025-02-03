import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { useDashboard } from "../../DashboardContext/useDashboard";
import { CreateBankAccountRequestBody } from "../../../../../../app/services/backAccountService/create";
import { bankAccountService } from "../../../../../../app/services/backAccountService";
import axios from "axios";
import toast from "react-hot-toast";

const newAccountFormSchema = z.object({
  name: z.string().nonempty("Nome da conta é obrigatório"),
  initialBalance: z.string().nonempty("Saldo inicial é obrigatório"),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type NewAccountFormData = z.infer<typeof newAccountFormSchema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<NewAccountFormData>({
    resolver: zodResolver(newAccountFormSchema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateBankAccountRequestBody) => {
      return bankAccountService.create(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        initialBalance: Number(data.initialBalance),
      });

      toast.success("Conta criada com sucesso.");
      closeNewAccountModal();
      reset({
        name: "",
        color: "",
        type: "CHECKING",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao criar a conta.");
      }
    }
  });

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isPending,
  };
}
