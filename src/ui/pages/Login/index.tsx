import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useLoginController } from "./useLoginController";

export function Login() {
  const { handleSubmit, register, errors } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold -tracking-[1px] text-gray-900">
          Entre em sua conta
        </h1>

        <p className="space-x-2">
          <span className="-tracking-[0.5px] text-gray-700">
            Novo por aqui?
          </span>

          <Link
            to="/register"
            className="font-medium -tracking-[0.5px] text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-14 flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
          {...register("password")}
        />

        <Button className="mt-2" type="submit">
          Entrar
        </Button>
      </form>
    </>
  );
}
