import { Transaction } from "../../../../../app/entities/Transaction";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { formatDate } from "../../../../../app/utils/formatDate";

import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface TransactionCardProps {
  transaction: Transaction;
  onClick?: (transaction: Transaction) => void;
}

export function TransactionCard({
  transaction,
  onClick,
}: TransactionCardProps) {
  const { areValuesVisible } = useDashboard();

  const isExpense = transaction.type === "EXPENSE";

  return (
    <div
      role="button"
      onClick={() => onClick && onClick(transaction)}
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-4"
    >
      <div className="flex items-center gap-3">
        <CategoryIcon
          type={isExpense ? "expense" : "income"}
          category={transaction.category?.icon}
        />

        <div className="flex flex-col">
          <strong className="-tracking-[0.5px] text-gray-800">
            {transaction.name}
          </strong>

          <small className="text-sm text-gray-600">
            {formatDate(new Date(transaction.date))}
          </small>
        </div>
      </div>

      <span
        className={cn(
          "font-medium -tracking-[0.5px] text-green-800",
          isExpense ? "text-red-800" : "text-green-800",
          !areValuesVisible && "blur-sm",
        )}
      >
        {isExpense ? "-" : "+"} {formatCurrency(transaction.value)}
      </span>
    </div>
  );
}
