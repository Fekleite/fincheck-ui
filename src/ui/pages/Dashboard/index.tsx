import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";

import { Accounts } from "./components/Accounts";
import { DashboardProvider } from "./components/DashboardContext";
import { Transactions } from "./components/Transactions";
import { Fab } from "./components/Fab";
import { NewAccountModal } from "./components/modals/NewAccountModal";

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="flex h-full w-full flex-col gap-4 p-4 md:px-8 md:pb-8 md:pt-6 lg:h-screen">
        <header className="flex h-12 items-center justify-between">
          <Logo className="h-6 text-teal-900" />

          <UserMenu />
        </header>

        <main className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-4">
          <div className="w-full">
            <Accounts />
          </div>

          <div className="w-full">
            <Transactions />
          </div>
        </main>

        <Fab />

        <NewAccountModal />
      </div>
    </DashboardProvider>
  );
}
