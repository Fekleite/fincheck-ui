import { PlusIcon } from "@radix-ui/react-icons";

import { Dropdown } from "../../../../components/Dropdown";

import { BankAccountIcon } from "../../../../components/icons/BankAccountIcon";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";

import { useDashboard } from "../DashboardContext/useDashboard";

export function Fab() {
  const { openNewAccountModal } = useDashboard();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          type="button"
          className="group fixed bottom-4 right-4 rounded-full bg-teal-900 p-3 text-white transition-colors hover:bg-teal-800 data-[state='open']:bg-teal-800"
        >
          <PlusIcon className="h-6 w-6 transition-transform group-data-[state='open']:rotate-45" />
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content align="end" sideOffset={16}>
        <Dropdown.Item>
          <CategoryIcon type="expense" />
          Nova Despesa
        </Dropdown.Item>

        <Dropdown.Item>
          <CategoryIcon type="income" />
          Nova Receita
        </Dropdown.Item>

        <Dropdown.Item onSelect={openNewAccountModal}>
          <BankAccountIcon />
          Nova Conta
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
