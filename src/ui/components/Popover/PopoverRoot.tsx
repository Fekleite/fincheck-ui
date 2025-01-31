import { Popover } from "radix-ui";

export function PopoverRoot({ children }: { children: React.ReactNode }) {
  return <Popover.Root>{children}</Popover.Root>;
}
