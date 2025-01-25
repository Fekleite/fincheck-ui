import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";

import { Accounts } from "./components/Accounts";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-4 p-4 md:px-8 md:pb-8 md:pt-6 lg:h-screen">
      <header className="flex h-12 items-center justify-between">
        <Logo className="h-6 text-teal-900" />

        <UserMenu />
      </header>

      <main className="flex flex-1 flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Accounts />
        </div>

        <div className="w-full lg:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
  );
}
