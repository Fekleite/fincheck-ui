import { Button } from "../../../../../components/Button";
import { ColorsDropdownInput } from "../../../../../components/ColorsDropdownInput";
import { Input } from "../../../../../components/Input";
import { InputCurrency } from "../../../../../components/InputCurrency";
import { Modal } from "../../../../../components/Modal";
import { Select } from "../../../../../components/Select";

import { useNewAccountModalController } from "./useNewAccountModalController";

const mockedAccountTypes = [
  {
    value: "CASH",
    label: "Dinheiro",
  },
  {
    value: "CHECKING",
    label: "Conta corrente",
  },
  {
    value: "INVESTMENT",
    label: "Investimento",
  },
];

export function NewAccountModal() {
  const { isNewAccountModalOpen, closeNewAccountModal } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form>
        <div>
          <span className="text-xs text-gray-600">Saldo</span>

          <div className="flex items-center justify-center gap-2">
            <span className="text-lg -tracking-[0.5px] text-gray-600">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Nome da Conta" />

          <Select placeholder="Tipo" options={mockedAccountTypes} />

          <ColorsDropdownInput />

          <Button className="h-14">Salvar</Button>
        </div>
      </form>
    </Modal>
  );
}
