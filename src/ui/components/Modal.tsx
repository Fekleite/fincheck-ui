import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";

interface ModalProps {
  open: boolean;
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
}

export function Modal({ open, children, title, rightAction }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/25 backdrop-blur-sm",
            "data-[state=open]:animate-overlay-show",
          )}
        />

        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed left-1/2 top-1/2 z-50 min-w-96 -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.1)] outline-none",
            "data-[state=open]:animate-content-show",
          )}
        >
          <header className="flex w-full items-center justify-between text-gray-800">
            <Dialog.Close asChild>
              <button
                type="button"
                className="left-0 flex h-12 w-12 items-center justify-center rounded-full outline-none transition-colors hover:bg-slate-200"
              >
                <Cross2Icon className="h-5 w-5" />
              </button>
            </Dialog.Close>

            <Dialog.Title className="flex-1 text-center text-lg font-bold -tracking-[1px]">
              {title}
            </Dialog.Title>

            <div className="h-12 w-12">{rightAction}</div>
          </header>

          <div>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
