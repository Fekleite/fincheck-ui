import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...attrs }: ButtonProps) {
  return (
    <button
      {...attrs}
      className="h-12 rounded-2xl bg-teal-800 px-6 font-medium text-white transition-all hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
    />
  );
}
