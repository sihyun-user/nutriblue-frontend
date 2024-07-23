import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

import Overlay from '../Overlay';

interface Props {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function DialogModal({
  title,
  isOpen,
  onClose,
  children
}: Props) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center px-4">
          <div className="h-[86vh] w-[520px] overflow-hidden rounded-lg bg-white shadow-md">
            <DialogPanel className="relative">
              <XMarkIcon
                className="absolute right-3 top-3 size-8 cursor-pointer"
                onClick={onClose}
              />
              <DialogTitle className="flex h-[60px] items-center border-b border-primary-200 px-6 text-2xl font-bold">
                {title}
              </DialogTitle>
              <div className="h-[calc(86vh-60px)] overflow-y-auto p-6">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Overlay open={isOpen} onClose={onClose} />
    </>
  );
}
