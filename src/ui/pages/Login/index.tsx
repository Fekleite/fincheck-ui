import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register } = useLoginController()

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 -tracking-[1px]">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 -tracking-[0.5px]">Novo por aqui?</span>

          <Link to="/register" className="text-teal-900 font-medium -tracking-[0.5px]">Crie uma conta</Link>
        </p>
      </header>

      <form 
        className="mt-14 flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <Input 
          placeholder="E-mail"
          type="email" 
          {...register('email')}
        />
        
        <Input 
          placeholder="Senha" 
          type="password" 
          {...register('password')}
        />

        <Button 
          type="submit"
        >
          Entrar
        </Button>
      </form>
    </>
  )
}