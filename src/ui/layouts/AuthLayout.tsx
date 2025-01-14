import { Outlet } from "react-router-dom"

import illustration from "../../assets/login-img.png"

import { Logo } from "../components/Logo"

export function AuthLayout() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center gap-16 px-8">
        <Logo 
          className="text-gray-500 h-6"
        />

        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full p-8 hidden lg:block">
        <div className="w-full h-full flex justify-center relative">
          <img 
            src={illustration} 
            className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
          />

          <div className="w-full max-w-[656px] bg-white p-10 absolute bottom-0 rounded-b-[32px] space-y-6">
            <Logo 
              className="text-teal-900 h-8"
            />

            <p className="text-gray-700 font-medium text-xl">
              Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}