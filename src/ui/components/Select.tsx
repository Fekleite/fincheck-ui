import { Select as RdxSelect } from "radix-ui";
import { ChevronDownIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";
import { useState } from "react";

interface SelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({
  className,
  error,
  placeholder,
  options,
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState("");

  function handleSelect(value: string) {
    setSelectedValue(value);
  }

  return (
    <div>
      <div className="relative">
        <label
          className={cn(
            "pointer-events-none absolute left-3.5 top-4 z-10 text-sm text-gray-700 transition-all",
            selectedValue && "top-2 text-xs text-gray-700",
          )}
        >
          {placeholder}
        </label>

        <RdxSelect.Root onValueChange={handleSelect}>
          <RdxSelect.Trigger
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-sm text-gray-800 outline-none focus:border-gray-800",
              error && "!border-red-900",
              selectedValue && "pt-4",
              className,
            )}
          >
            <RdxSelect.Value />

            <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="h-6 w-6 text-gray-800" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>

          <RdxSelect.Portal>
            <RdxSelect.Content className="z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)]">
              <RdxSelect.Viewport className="space-y-2 p-2">
                {options.map((option) => (
                  <RdxSelect.Item
                    className="rounded-2xl p-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-100 data-[state='checked']:bg-gray-200"
                    value={option.value}
                    key={option.value}
                  >
                    <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                  </RdxSelect.Item>
                ))}
              </RdxSelect.Viewport>
            </RdxSelect.Content>
          </RdxSelect.Portal>
        </RdxSelect.Root>
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
