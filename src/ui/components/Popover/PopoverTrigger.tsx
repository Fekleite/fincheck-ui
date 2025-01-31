import { Popover } from "radix-ui";

import { cn } from "../../../app/utils/cn";

export function PopoverTrigger({
  children,
  className,
  ...attrs
}: Popover.PopoverTriggerProps) {
  return (
    <Popover.Trigger {...attrs} className={cn("outline-none", className)}>
      {children}
    </Popover.Trigger>
  );
}
