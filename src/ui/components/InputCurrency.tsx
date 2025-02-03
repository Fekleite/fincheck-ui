import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";
import { cn } from "../../app/utils/cn";

interface InputCurrencyProps {
  error?: string;
  onChange(value: string): void;
  value?: string;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-lg -tracking-[0.5px] text-gray-600">R$</span>

        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          valueIsNumericString
          className={cn(
            "rounded-lg text-[32px] font-bold -tracking-[1px] text-gray-800 outline-none",
            error && "bg-red-50",
          )}
          onValueChange={(event) => onChange(event.value)}
          value={value}
        />
      </div>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
