import { Controller } from "react-hook-form";

import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";
import { DatePickerInput } from "../../../../../components/DatePickerInput";
import { ConfirmDeleteModal } from "../../../../../components/ConfirmDeleteModal";
import { TrashIcon } from "../../../../../components/icons/TrashIcon";

import { Transaction } from "../../../../../../app/entities/Transaction";

import { useEditTransactionModalController } from "./useEditTransactionModalController";

interface EditTransactionModalProps {
  transaction: Transaction | null;
  open: boolean;
  onClose(): void;
}

export function EditTransactionModal({
  transaction,
  open,
  onClose,
}: EditTransactionModalProps) {
  const {
    control,
    errors,
    handleSubmit,
    register,
    accounts,
    categories,
    isPending,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    isRemovePending,
    handleDeleteTransaction,
  } = useEditTransactionModalController(transaction, onClose);

  const isExpense = transaction?.type === "EXPENSE";

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteTransaction}
        title={`Tem certeza que deseja excluir esta ${isExpense ? "despesa" : "receita"}`}
        isLoading={isRemovePending}
      />
    );
  }

  return (
    <Modal
      title={isExpense ? "Despesa" : "Receita"}
      open={open}
      onClose={onClose}
      rightAction={
        <button
          type="button"
          className="left-0 flex h-12 w-12 items-center justify-center rounded-full outline-none transition-colors hover:bg-slate-200"
          onClick={handleOpenDeleteModal}
        >
          <TrashIcon className="h-5 w-5 text-red-900" />
        </button>
      }
    >
      <form onSubmit={handleSubmit}>
        <div>
          <span className="text-xs text-gray-600">Valor</span>

          <Controller
            control={control}
            name="value"
            defaultValue="0"
            render={({ field: { onChange, value } }) => (
              <InputCurrency
                error={errors.value?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}
            {...register("name")}
            error={errors.name?.message}
          />

          <Controller
            control={control}
            name="categoryId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Categoria"
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
                error={errors.categoryId?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder={isExpense ? "Pagar com" : "Receber em"}
                options={accounts.map((account) => ({
                  value: account.id,
                  label: account.name,
                }))}
                error={errors.bankAccountId?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field: { onChange, value } }) => (
              <DatePickerInput
                error={errors.date?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Button className="h-14" isLoading={isPending}>
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
