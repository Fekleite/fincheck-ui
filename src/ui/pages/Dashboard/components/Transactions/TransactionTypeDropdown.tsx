import { ChevronDownIcon } from "@radix-ui/react-icons";

import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { Dropdown } from "../../../../components/Dropdown";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";

export function TransactionTypeDropdown() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <button
          type="button"
          className="flex items-center justify-between gap-2 py-3"
        >
          <TransactionsIcon />

          <span className="text-sm font-medium -tracking-[0.5px] text-gray-800">
            Transações
          </span>

          <ChevronDownIcon className="h-6 w-6 text-gray-900" />
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content align="start" className="w-72">
        <Dropdown.Item>
          <IncomeIcon />
          Receitas
        </Dropdown.Item>

        <Dropdown.Item>
          <ExpensesIcon />
          Despesas
        </Dropdown.Item>

        <Dropdown.Item>
          <TransactionsIcon />
          Transações
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
