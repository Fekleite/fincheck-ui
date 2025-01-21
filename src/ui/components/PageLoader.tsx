import { Logo } from "./Logo";
import { Spinner } from "./Spinner";

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex h-full w-full flex-col items-center justify-center gap-2 bg-teal-900">
      <Logo className="h-10 text-white" />

      <Spinner className="h-5 w-5 fill-white text-teal-900" />
    </div>
  );
}
