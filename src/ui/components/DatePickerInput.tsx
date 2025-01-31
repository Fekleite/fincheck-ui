import { useState } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";
import { formatDate } from "../../app/utils/formatDate";
import { Popover } from "./Popover";
import { DatePicker } from "./DatePicker";

interface DatePickerInputProps {
  error?: string;
  className?: string;
}

export function DatePickerInput({ error, className }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleChange(date: Date) {
    setSelectedDate(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type="button"
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-sm text-gray-700 outline-none focus:border-gray-800",
              error && "!border-red-900",
              selectedDate && "pt-4",
              className,
            )}
          >
            <span
              className={cn(
                "pointer-events-none absolute left-3.5 top-4 z-10 text-sm text-gray-700 transition-all",
                selectedDate && "top-2 text-xs text-gray-700",
              )}
            >
              Data
            </span>

            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={selectedDate} onChange={handleChange} />
        </Popover.Content>
      </Popover.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
