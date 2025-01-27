import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";

import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface TransactionCardProps {
  name: string;
  date: string;
  value: number;
  type: "income" | "expense";
  category?: string;
}

export function TransactionCard({
  name,
  date,
  value,
  type,
  category,
}: TransactionCardProps) {
  const { areValuesVisible } = useDashboard();

  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-4">
      <div className="flex items-center gap-3">
        <CategoryIcon type={type} category={category} />

        <div className="flex flex-col">
          <strong className="-tracking-[0.5px] text-gray-800">{name}</strong>

          <small className="text-sm text-gray-600">{date}</small>
        </div>
      </div>

      <span
        className={cn(
          "font-medium -tracking-[0.5px] text-green-800",
          !areValuesVisible && "blur-sm",
        )}
      >
        + {formatCurrency(value)}
      </span>
    </div>
  );
}
