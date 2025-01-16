import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, ...attrs }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative flex items-center">
        <input
          {...attrs}
          ref={ref}
          name={name}
          id={inputId}
          autoComplete="off"
          placeholder=" " // Placeholder with an empty string to use placeholder-shown attribute in a custom label
          className="peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-sm text-gray-800 outline-none placeholder-shown:pt-0 focus:border-gray-800"
        />

        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-3.5 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-auto peer-placeholder-shown:text-sm"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);
