import { ButtonHTMLAttributes } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  ...attrs
}: ButtonProps) {
  return (
    <button
      {...attrs}
      disabled={disabled || isLoading}
      className={cn(
        "flex h-12 items-center justify-center rounded-2xl bg-teal-800 px-6 font-medium text-white transition-all hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    >
      {isLoading ? <Spinner className="h-5 w-5 fill-gray-400" /> : children}
    </button>
  );
}
