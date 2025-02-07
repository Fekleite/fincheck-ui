import { ChevronDownIcon } from "@radix-ui/react-icons";

import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { Dropdown } from "../../../../components/Dropdown";
import { IncomeIcon } from "../../../../components/icons/IncomeIcon";
import { ExpensesIcon } from "../../../../components/icons/ExpensesIcon";

import { TransactionType } from "../../../../../app/entities/Transaction";

interface TransactionTypeDropdownProps {
  onSelect(type: TransactionType | undefined): void;
  selectedType: TransactionType | undefined;
}

export function TransactionTypeDropdown({
  onSelect,
  selectedType,
}: TransactionTypeDropdownProps) {
  function getSelectedTypeLabel() {
    switch (selectedType) {
      case "EXPENSE":
        return "Despesas";
      case "INCOME":
        return "Receitas";
      default:
        return "Transações";
    }
  }

  function getSelectedTypeIcon() {
    switch (selectedType) {
      case "EXPENSE":
        return <ExpensesIcon />;
      case "INCOME":
        return <IncomeIcon />;
      default:
        return <TransactionsIcon />;
    }
  }

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          type="button"
          className="flex items-center justify-between gap-2 rounded-full p-3 transition-colors hover:bg-gray-200"
        >
          {getSelectedTypeIcon()}

          <span className="text-sm font-medium -tracking-[0.5px] text-gray-800">
            {getSelectedTypeLabel()}
          </span>

          <ChevronDownIcon className="h-6 w-6 text-gray-900" />
        </button>
      </Dropdown.Trigger>

      <Dropdown.Content align="start" className="w-72">
        <Dropdown.Item onSelect={() => onSelect("INCOME")}>
          <IncomeIcon />
          Receitas
        </Dropdown.Item>

        <Dropdown.Item onSelect={() => onSelect("EXPENSE")}>
          <ExpensesIcon />
          Despesas
        </Dropdown.Item>

        <Dropdown.Item onSelect={() => onSelect(undefined)}>
          <TransactionsIcon />
          Transações
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
