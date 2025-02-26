import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

import { useDashboard } from "../../DashboardContext/useDashboard";

import { bankAccountService } from "../../../../../../app/services/bankAccountService";
import { UpdateBankAccountRequestBody } from "../../../../../../app/services/bankAccountService/update";

const editAccountFormSchema = z.object({
  name: z.string().nonempty("Nome da conta é obrigatório"),
  initialBalance: z.union([
    z.string().nonempty("Saldo inicial é obrigatório"),
    z.number(),
  ]),
  type: z.enum(["CHECKING", "INVESTMENT", "CASH"]),
  color: z.string().nonempty("Cor é obrigatória"),
});

type EditAccountFormData = z.infer<typeof editAccountFormSchema>;

export function useEditAccountModalController() {
  const { isEditAccountModalOpen, closeEditAccountModal, accountBeingEdited } =
    useDashboard();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<EditAccountFormData>({
    resolver: zodResolver(editAccountFormSchema),
    defaultValues: {
      color: accountBeingEdited?.color,
      initialBalance: accountBeingEdited?.initialBalance,
      name: accountBeingEdited?.name,
      type: accountBeingEdited?.type,
    },
  });

  const queryClient = useQueryClient();

  const { isPending, mutateAsync: updateAccount } = useMutation({
    mutationFn: async (data: UpdateBankAccountRequestBody) => {
      return bankAccountService.update(data);
    },
  });

  const { isPending: isRemovePending, mutateAsync: removeAccount } =
    useMutation({
      mutationFn: async (bankAccountId: string) => {
        return bankAccountService.remove(bankAccountId);
      },
    });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await updateAccount({
        ...data,
        initialBalance: Number(data.initialBalance),
        id: accountBeingEdited!.id,
      });

      queryClient.invalidateQueries({
        queryKey: ["bank-accounts"],
      });

      toast.success("Conta editada com sucesso.");
      closeEditAccountModal();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao editar a conta.");
      }
    }
  });

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  async function handleDeleteAccount() {
    try {
      await removeAccount(accountBeingEdited!.id);

      queryClient.invalidateQueries({
        queryKey: ["bank-accounts"],
      });

      toast.success("Conta deletada com sucesso.");
      closeEditAccountModal();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Ocorreu um erro ao deletar a conta.");
      }
    }
  }

  return {
    isEditAccountModalOpen,
    closeEditAccountModal,
    register,
    errors,
    handleSubmit,
    control,
    isPending,
    accountBeingEdited,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    handleDeleteAccount,
    isRemovePending,
  };
}
