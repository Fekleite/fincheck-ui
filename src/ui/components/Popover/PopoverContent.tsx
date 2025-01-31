import { Popover } from "radix-ui";

import { cn } from "../../../app/utils/cn";

export function PopoverContent({
  children,
  className,
  ...attrs
}: Popover.PopoverContentProps) {
  return (
    <Popover.Portal>
      <Popover.Content
        {...attrs}
        className={cn(
          "z-50 rounded-2xl bg-white p-4 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]",
          "data-[state=open]:data-[side=bottom]:animate-slide-up-and-fade data-[state=open]:data-[side=left]:animate-slide-right-and-fade data-[state=open]:data-[side=right]:animate-slide-left-and-fade data-[state=open]:data-[side=top]:animate-slide-down-and-fade",
          className,
        )}
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  );
}
