import { DropdownMenu } from "radix-ui";

export function DropdownRoot({ children }: { children: React.ReactNode }) {
  return <DropdownMenu.Root>{children}</DropdownMenu.Root>;
}
