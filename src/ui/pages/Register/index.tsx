import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useRegisterController } from "./useRegisterController";

export function Register() {
  const { handleSubmit, register, errors, isPending } = useRegisterController();

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

      <form className="mt-14 flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          type="text"
          error={errors.name?.message}
          {...register("name")}
        />

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

        <Button type="submit" isLoading={isPending}>
          Criar conta
        </Button>
      </form>
    </div>
  );
}
