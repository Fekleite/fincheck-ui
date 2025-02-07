import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import { useMemo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useBankAccounts } from "../../../../../../app/hooks/useBankAccounts";
import { useCategories } from "../../../../../../app/hooks/useCategories";
import { Transaction } from "../../../../../../app/entities/Transaction";

import { transactionsService } from "../../../../../../app/services/transactionsService";
import { UpdateTransactionRequestBody } from "../../../../../../app/services/transactionsService/update";

const editTransactionFormSchema = z.object({
  value: z.union([z.string().nonempty("Informe um valor"), z.number()]),
  name: z.string().nonempty("Informe o nome"),
  categoryId: z.string().nonempty("Informe a categoria"),
  bankAccountId: z.string().nonempty("Informe a conta"),
  date: z.date(),
});

type EditTransactionFormData = z.infer<typeof editTransactionFormSchema>;

export function useEditTransactionModalController(
  transaction: Transaction | null,
  handleCloseEditModal: () => void,
) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = useForm<EditTransactionFormData>({
    resolver: zodResolver(editTransactionFormSchema),
    defaultValues: {
      bankAccountId: transaction?.bankAccountId,
      categoryId: transaction?.categoryId,
      date: transaction ? new Date(transaction.date) : new Date(),
      name: transaction?.name,
      value: transaction?.value,
    },
  });

  const queryClient = useQueryClient();

  const { accounts } = useBankAccounts();
  const { categories } = useCategories();

  const { isPending, mutateAsync: updateTransaction } = useMutation({
    mutationFn: async (data: UpdateTransactionRequestBody) => {
      return transactionsService.update(data);
    },
  });

  const { isPending: isRemovePending, mutateAsync: removeTransaction } =
    useMutation({
      mutationFn: async (transactionId: string) => {
        return transactionsService.remove(transactionId);
      },
    });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await updateTransaction({
        ...data,
        id: transaction!.id,
        type: transaction!.type,
        value: Number(data.value),
        date: data.date.toISOString(),
      });

      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });

      toast.success("Transação editada com sucesso.");
      handleCloseEditModal();
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao editar a transação.");
      }
    }
  });

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  async function handleDeleteTransaction() {
    try {
      await removeTransaction(transaction!.id);

      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });

      toast.success("Transação deletada com sucesso.");
      handleCloseEditModal();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao deletar a Ttansação.");
      }
    }
  }

  const filteredCategories = useMemo(() => {
    return categories.filter((category) => category.type === transaction?.type);
  }, [categories, transaction]);

  return {
    handleSubmit,
    register,
    control,
    errors,
    accounts,
    categories: filteredCategories,
    isPending,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteTransaction,
    isRemovePending,
  };
}
