import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...attrs }: ButtonProps) {
  return (
    <button
      {...attrs}
      className="bg-teal-800 hover:bg-teal-900 disabled:bg-gray-100 px-6 h-12 rounded-2xl text-white disabled:text-gray-400 font-medium transition-all disabled:cursor-not-allowed"
    />
  )
}