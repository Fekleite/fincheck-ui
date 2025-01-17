import { forwardRef, InputHTMLAttributes } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...attrs }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...attrs}
          ref={ref}
          name={name}
          id={inputId}
          autoComplete="off"
          placeholder=" " // Placeholder with an empty string to use placeholder-shown attribute in a custom label
          className={cn(
            "peer h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-sm text-gray-800 outline-none placeholder-shown:pt-0 focus:border-gray-800",
            error && "!border-red-900",
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-3.5 top-2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm"
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex items-center gap-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
