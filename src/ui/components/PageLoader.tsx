import { Logo } from "./Logo";

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-teal-900">
      <Logo className="h-10 animate-pulse text-white" />
    </div>
  );
}
