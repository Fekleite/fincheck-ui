import { Outlet } from "react-router-dom";

import illustration from "../../assets/login-img.png";

import { Logo } from "../components/Logo";

export function AuthLayout() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 px-8 lg:w-1/2">
        <Logo className="h-6 text-gray-500" />

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="hidden h-full w-1/2 p-8 lg:block">
        <div className="relative flex h-full w-full justify-center">
          <img
            src={illustration}
            className="h-full max-h-[960px] w-full max-w-[656px] select-none rounded-[32px] object-cover"
          />

          <div className="absolute bottom-0 w-full max-w-[656px] space-y-6 rounded-b-[32px] bg-white p-10">
            <Logo className="h-8 text-teal-900" />

            <p className="text-xl font-medium text-gray-700">
              Gerencie suas finanças pessoais de uma forma simples com o
              fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
