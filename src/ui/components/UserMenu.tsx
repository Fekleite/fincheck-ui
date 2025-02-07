import { ExitIcon } from "@radix-ui/react-icons";

import { Dropdown } from "./Dropdown";

import { useAuth } from "../../app/hooks/useAuth";

export function UserMenu() {
  const { signout, user } = useAuth();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
          <span className="text-sm font-medium -tracking-[0.5] text-teal-900">
            {user?.name.slice(0, 2).toUpperCase()}
          </span>
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content align="end" sideOffset={8} className="w-36">
        <Dropdown.Item className="justify-between" onSelect={signout}>
          Sair
          <ExitIcon className="h-4 w-4" />
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
