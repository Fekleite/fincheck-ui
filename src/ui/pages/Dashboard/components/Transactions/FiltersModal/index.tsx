import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Modal } from "../../../../../components/Modal";
import { Button } from "../../../../../components/Button";

import { useFiltersModalController } from "./useFiltersModalController";

import { cn } from "../../../../../../app/utils/cn";

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
  onApplyFilters(filters: { bankAccountId?: string; year: number }): void;
}

export function FiltersModal({
  open,
  onClose,
  onApplyFilters,
}: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectedBankAccount,
    selectedYear,
    handleChangeYear,
    accounts,
  } = useFiltersModalController();

  return (
    <Modal open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="flex-1 text-center text-lg font-bold -tracking-[1px] text-gray-800">
          Conta
        </span>

        <div className="mt-2 space-y-2">
          {accounts.map((account) => (
            <button
              key={account.id}
              type="button"
              onClick={() => handleSelectedBankAccount(account.id)}
              className={cn(
                "w-full rounded-2xl p-2 text-left text-sm text-gray-800 transition-colors hover:bg-gray-100",
                account.id === selectedBankAccountId && "!bg-gray-200",
              )}
            >
              {account.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <span className="flex-1 text-center text-lg font-bold -tracking-[1px] text-gray-800">
          Ano
        </span>

        <div className="mt-2 flex w-52 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => handleChangeYear(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-200"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div className="flex-1 text-center">
            <span className="text-small font-medium -tracking-[0.5px] text-gray-800">
              {selectedYear}
            </span>
          </div>

          <button
            type="button"
            onClick={() => handleChangeYear(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-200"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button
        type="button"
        className="w-full"
        onClick={() =>
          onApplyFilters({
            bankAccountId: selectedBankAccountId,
            year: selectedYear,
          })
        }
      >
        Aplicar Filtros
      </Button>
    </Modal>
  );
}
