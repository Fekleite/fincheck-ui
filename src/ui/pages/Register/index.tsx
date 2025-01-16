import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Register() {
  return (
    <div>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold -tracking-[1px] text-gray-900">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span className="-tracking-[0.5px] text-gray-700">
            Já possui uma conta?
          </span>

          <Link
            to="/login"
            className="font-medium -tracking-[0.5px] text-teal-900"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form className="mt-14 flex flex-col gap-4">
        <Input placeholder="Nome" type="text" name="name" />

        <Input placeholder="E-mail" type="email" name="email" />

        <Input placeholder="Senha" type="password" name="password" />

        <Button type="submit">Criar conta</Button>
      </form>
    </div>
  );
}
