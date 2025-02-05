import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import { useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useDashboard } from "../../DashboardContext/useDashboard";

import { useBankAccounts } from "../../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../../app/hooks/useCategories";
import { CreateTransactionRequestBody } from "../../../../../../app/services/transactionsService/create";
import { transactionsService } from "../../../../../../app/services/transactionsService";

const newTransactionFormSchema = z.object({
  value: z.string().nonempty("Informe o valor"),
  name: z.string().nonempty("Informe o nome"),
  categoryId: z.string().nonempty("Informe a categoria"),
  bankAccountId: z.string().nonempty("Informe a conta"),
  date: z.date(),
});

type NewTransactionFormData = z.infer<typeof newTransactionFormSchema>;

export function useNewTransactionModalController() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useDashboard();

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
  });

  const queryClient = useQueryClient();

  const { accounts } = useBankAccounts();
  const { categories } = useCategories();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateTransactionRequestBody) => {
      return transactionsService.create(data);
    },
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync({
        ...data,
        value: Number(data.value),
        type: newTransactionType!,
      });

      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });

      queryClient.invalidateQueries({
        queryKey: ["bank-accounts"],
      });

      toast.success("Transação criada com sucesso.");
      closeNewTransactionModal();
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao criar a transação.");
      }
    }
  });

  const filteredCategories = useMemo(() => {
    return categories.filter(
      (category) => category.type === newTransactionType,
    );
  }, [categories, newTransactionType]);

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    handleSubmit,
    register,
    control,
    errors,
    accounts,
    categories: filteredCategories,
    isPending,
  };
}
