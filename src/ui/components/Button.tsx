import { ButtonHTMLAttributes } from "react";
import { cn } from "../../app/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...attrs }: ButtonProps) {
  return (
    <button
      {...attrs}
      className={cn(
        "h-12 rounded-2xl bg-teal-800 px-6 font-medium text-white transition-all hover:bg-teal-900 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        className,
      )}
    />
  );
}
