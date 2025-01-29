import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function DropdownTrigger({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu.Trigger className="outline-none">
      {children}
    </DropdownMenu.Trigger>
  );
}
