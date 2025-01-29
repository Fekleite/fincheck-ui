import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "../../../app/utils/cn";

export function DropdownTrigger({
  children,
  className,
  ...attrs
}: DropdownMenu.DropdownMenuTriggerProps) {
  return (
    <DropdownMenu.Trigger {...attrs} className={cn("outline-none", className)}>
      {children}
    </DropdownMenu.Trigger>
  );
}
