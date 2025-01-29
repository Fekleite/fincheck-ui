import { DropdownMenu } from "radix-ui";

import { cn } from "../../../app/utils/cn";

export function DropdownContent({
  children,
  className,
  ...attrs
}: DropdownMenu.DropdownMenuContentProps) {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        {...attrs}
        className={cn(
          "z-50 space-y-2 rounded-2xl border border-gray-100 bg-white p-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          "data-[side=bottom]:animate-slide-up-and-fade data-[side=left]:animate-slide-right-and-fade data-[side=right]:animate-slide-left-and-fade data-[side=top]:animate-slide-down-and-fade",
          className,
        )}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}
