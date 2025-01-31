import { ChevronDownIcon, CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";

import { ColorIcon } from "./icons/ColorIcon";

import { Dropdown } from "./Dropdown";
import { useState } from "react";

interface ColorsDropdownInputProps {
  error?: string;
  className?: string;
}

type Color = {
  color: string;
  bg: string;
};

const colors: Color[] = [
  { color: "#FA5252", bg: "#FFF5F5" },
  { color: "#E64980", bg: "#FFF0F6" },
  { color: "#BE4BDB", bg: "#F8F0FC" },
  { color: "#7950F2", bg: "#F3F0FF" },
  { color: "#4C6EF5", bg: "#EDF2FF" },
  { color: "#228BE6", bg: "#E7F5FF" },
  { color: "#15AABF", bg: "#E3FAFC" },
  { color: "#12B886", bg: "#E6FCF5" },
  { color: "#40C057", bg: "#EBFBEE" },
  { color: "#82C91E", bg: "#F4FCE3" },
  { color: "#FAB005", bg: "#FFF9DB" },
  { color: "#FD7E14", bg: "#FFF4E6" },
  { color: "#868E96", bg: "#F8F9FA" },
  { color: "#212529", bg: "#F8F9FA" },
  { color: "#FFFFFF", bg: "#DEE2E6" },
];

export function ColorsDropdownInput({
  error,
  className,
}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(null);

  function handleSelect(color: Color) {
    setSelectedColor(color);
  }

  return (
    <div>
      <Dropdown.Root>
        <Dropdown.Trigger asChild>
          <button
            type="button"
            className={cn(
              "flex h-[52px] w-full items-center justify-between rounded-lg border border-gray-500 bg-white px-3 outline-none focus:border-gray-800",
              error && "!border-red-900",
              className,
            )}
          >
            <span className="text-sm text-gray-700">Cor</span>

            {!selectedColor && (
              <ChevronDownIcon className="h-6 w-6 text-gray-800" />
            )}

            {selectedColor && (
              <ColorIcon bg={selectedColor.bg} color={selectedColor.color} />
            )}
          </button>
        </Dropdown.Trigger>

        <Dropdown.Content className="grid grid-cols-4 gap-x-8 gap-y-4">
          {colors.map((colorItem) => (
            <Dropdown.Item
              key={colorItem.color}
              onSelect={() => handleSelect(colorItem)}
            >
              <ColorIcon bg={colorItem.bg} color={colorItem.color} />
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>

      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}
