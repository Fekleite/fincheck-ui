import { ButtonHTMLAttributes } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "danger" | "ghost";
}

export function Button({
  className,
  isLoading,
  disabled,
  children,
  variant,
  ...attrs
}: ButtonProps) {
  return (
    <button
      {...attrs}
      disabled={disabled || isLoading}
      className={cn(
        "flex h-12 items-center justify-center rounded-2xl bg-teal-900 px-6 font-medium text-white transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        variant === "danger" && "bg-red-900 hover:bg-red-800",
        variant === "ghost" &&
          "border border-gray-800 bg-transparent text-gray-800 hover:bg-gray-100",
        className,
      )}
    >
      {isLoading ? <Spinner className="h-5 w-5 fill-gray-400" /> : children}
    </button>
  );
}
