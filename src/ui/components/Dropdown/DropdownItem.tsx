import { DropdownMenu } from "radix-ui";

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
        "flex w-full cursor-pointer items-center gap-2 rounded-2xl p-2 text-sm text-gray-800 outline-none transition-colors",
        "data-[highlighted]:bg-gray-100",
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
}
