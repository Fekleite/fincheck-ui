import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 -tracking-[1px]">Crie sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 -tracking-[0.5px]">Já possui uma conta?</span>

          <Link to="/login" className="text-teal-900 font-medium -tracking-[0.5px]">Fazer Login</Link>
        </p>
      </header>

      <form className="mt-14 flex flex-col gap-4">
        <Input 
          placeholder="Nome" 
          type="text" 
          name="name" 
        />

        <Input 
          placeholder="E-mail"
          type="email" 
          name="email" 
        />

        <Input 
          placeholder="Senha" 
          type="password" 
          name="password" 
        />

        <Button 
          type="submit"
        >
          Criar conta
        </Button>
      </form>
    </div>
  )
}