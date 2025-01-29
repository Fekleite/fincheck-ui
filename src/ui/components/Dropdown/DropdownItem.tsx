import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "../../../app/utils/cn";

export function DropdownItem({
  children,
  className,
  ...attrs
}: DropdownMenu.DropdownMenuItemProps) {
  return (
    <DropdownMenu.Item
      {...attrs}
      className={cn(
        "w-full cursor-pointer rounded-2xl p-2 text-sm text-gray-800 outline-none transition-colors hover:bg-gray-100",
        "data-[highlighted]:bg-gray-200",
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
}
