import { PlusIcon } from "@radix-ui/react-icons";

import { Dropdown } from "./Dropdown";

import { BankAccountIcon } from "./icons/BankAccountIcon";
import { CategoryIcon } from "./icons/categories/CategoryIcon";

export function Fab() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          type="button"
          className="group fixed bottom-4 right-4 rounded-full bg-teal-900 p-3 text-white transition-colors hover:bg-teal-800"
        >
          <PlusIcon className="h-6 w-6 transition-transform group-data-[state='open']:rotate-45" />
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content align="end" sideOffset={8}>
        <Dropdown.Item>
          <CategoryIcon type="expense" />
          Nova Despesa
        </Dropdown.Item>

        <Dropdown.Item>
          <CategoryIcon type="income" />
          Nova Receita
        </Dropdown.Item>

        <Dropdown.Item>
          <BankAccountIcon />
          Nova Conta
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
