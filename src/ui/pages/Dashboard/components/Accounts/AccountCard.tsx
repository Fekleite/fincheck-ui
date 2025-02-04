import { AccountType } from "../../../../../app/entities/BankAccount";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";

import { BankAccountTypeIcon } from "../../../../components/icons/BankAccountTypeIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface AccountCardProps {
  data: AccountType;
}

export function AccountCard({ data }: AccountCardProps) {
  const { areValuesVisible, openEditAccountModal } = useDashboard();

  const { name, type, color, currentBalance } = data;

  return (
    <div
      className="flex h-52 flex-col justify-between rounded-2xl border-b-4 border-gray-500 bg-white p-4 transition-colors hover:bg-gray-100"
      style={{ borderBottomColor: color }}
      role="button"
      onClick={() => openEditAccountModal(data)}
    >
      <div className="flex flex-col gap-4">
        <BankAccountTypeIcon type={type} />

        <span className="font-medium -tracking-[0.5px] text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            "font-medium -tracking-[0.5px] text-gray-800",
            !areValuesVisible && "blur-sm",
          )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <small className="block text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
