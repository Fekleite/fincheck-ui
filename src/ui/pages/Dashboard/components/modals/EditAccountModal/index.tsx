import { Controller } from "react-hook-form";

import { Button } from "../../../../../components/Button";
import { ColorsDropdownInput } from "../../../../../components/ColorsDropdownInput";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { TrashIcon } from "../../../../../components/icons/TrashIcon";

import { useEditAccountModalController } from "./useEditAccountModalController";

import { ACCOUNT_TYPE_OPTIONS } from "../../../../../../app/config/constants";
import { ConfirmDeleteModal } from "../../../../../components/ConfirmDeleteModal";

export function EditAccountModal() {
  const {
    isEditAccountModalOpen,
    closeEditAccountModal,
    errors,
    register,
    control,
    handleSubmit,
    isPending,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    isRemovePending,
  } = useEditAccountModalController();

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteAccount}
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
        isLoading={isRemovePending}
      />
    );
  }

  return (
    <Modal
      title="Conta"
      open={isEditAccountModalOpen}
      onClose={closeEditAccountModal}
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
          <span className="text-xs text-gray-600">Saldo inicial</span>

          <Controller
            control={control}
            name="initialBalance"
            defaultValue="0"
            render={({ field: { onChange, value } }) => (
              <InputCurrency
                error={errors.initialBalance?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Nome da Conta"
            error={errors.name?.message}
            {...register("name")}
          />

          <Controller
            control={control}
            name="type"
            defaultValue="CHECKING"
            render={({ field: { onChange, value } }) => (
              <Select
                placeholder="Tipo"
                options={ACCOUNT_TYPE_OPTIONS}
                error={errors.type?.message}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="color"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <ColorsDropdownInput
                error={errors.color?.message}
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
