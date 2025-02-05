import { Button } from "./Button";
import { TrashIcon } from "./icons/TrashIcon";
import { Modal } from "./Modal";

interface ConfirmDeleteModalProps {
  onConfirm(): void;
  onClose(): void;
  open: boolean;
  title: string;
  description?: string;
  isLoading?: boolean;
}

export function ConfirmDeleteModal({
  onClose,
  open,
  title,
  description,
  onConfirm,
  isLoading,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open={open} title="Excluir" onClose={onClose}>
      <div className="space-y-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <TrashIcon className="h-6 w-6 text-red-900" />
          </div>

          <p className="max-w-44 text-center font-bold -tracking-[0.5px] text-gray-800">
            {title}
          </p>

          {description && (
            <span className="max-w-[350px] text-center -tracking-[0.5px] text-gray-800">
              {description}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <Button onClick={onConfirm} variant="danger" isLoading={isLoading}>
            Sim, desejo excluir
          </Button>

          <Button onClick={onClose} variant="ghost" disabled={isLoading}>
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
