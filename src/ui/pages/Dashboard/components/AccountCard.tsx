import { formatCurrency } from "../../../../app/utils/formatCurrency";

import { BankAccountTypeIcon } from "../../../components/icons/BankAccountTypeIcon";

interface AccountCardProps {
  name: string;
  type: "CHECKING" | "INVESTMENT" | "CASH";
  color: string;
  currentBalance: number;
}

export function AccountCard({
  name,
  type,
  color,
  currentBalance,
}: AccountCardProps) {
  return (
    <div
      className="flex h-52 flex-col justify-between rounded-2xl border-b-4 border-gray-500 bg-white p-4"
      style={{ borderBottomColor: color }}
    >
      <div className="flex flex-col gap-4">
        <BankAccountTypeIcon type={type} />

        <span className="font-medium -tracking-[0.5px] text-gray-800">
          {name}
        </span>
      </div>

      <div>
        <span className="font-medium -tracking-[0.5px] text-gray-800">
          {formatCurrency(currentBalance)}
        </span>
        <small className="block text-sm text-gray-600">Saldo atual</small>
      </div>
    </div>
  );
}
