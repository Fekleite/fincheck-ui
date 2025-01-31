import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";
import { Button } from "../../../../../components/Button";
import { Input } from "../../../../../components/Input";

import { useNewTransactionModalController } from "./useNewTransactionModalController";
import { DatePickerInput } from "../../../../../components/DatePickerInput";

export function NewTransactionModal() {
  const {
    isNewTransactionModalOpen,
    newTransactionType,
    closeNewTransactionModal,
  } = useNewTransactionModalController();

  const isExpense = newTransactionType === "EXPENSE";

  return (
    <Modal
      title={isExpense ? "Nova Despesa" : "Nova Receita"}
      open={isNewTransactionModalOpen}
      onClose={closeNewTransactionModal}
    >
      <form>
        <div>
          <span className="text-xs text-gray-600">Valor</span>

          <div className="flex items-center justify-center gap-2">
            <span className="text-lg -tracking-[0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder={isExpense ? "Nome da Despesa" : "Nome da Receita"}
          />

          <Select placeholder="Categoria" options={[]} />

          <Select
            placeholder={isExpense ? "Pagar com" : "Receber em"}
            options={[]}
          />

          <DatePickerInput />

          <Button className="h-14">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}
