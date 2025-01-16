import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ placeholder, name, id, ...attrs }: InputProps) {
  const inputId = id ?? name

  return (
    <div className="relative flex items-center">
      <input 
        {...attrs}
        name={name}
        id={inputId}
        autoComplete="off"
        placeholder=" " // Placeholder with an empty string to use placeholder-shown attribute in a custom label
        className="w-full bg-white rounded-lg border border-gray-500 focus:border-gray-800 px-3 pt-4 h-[52px] text-gray-800 text-sm outline-none peer placeholder-shown:pt-0"
      />

      <label 
        htmlFor={inputId}
        className="absolute left-3.5 top-2 pointer-events-none text-gray-700 text-xs peer-placeholder-shown:top-auto peer-placeholder-shown:text-sm transition-all"
      >
        {placeholder}
      </label>
    </div>
  )
}