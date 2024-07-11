import { Dialog, DialogPanel } from '@headlessui/react';

import Overlay from '../Overlay';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export default function DialogSmall({ isOpen, onClose, children }: Props) {
  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center px-4">
          <div className="w-[350px] rounded-xl bg-white shadow-md">
            <DialogPanel className="relative">{children}</DialogPanel>
          </div>
        </div>
      </Dialog>
      <Overlay open={isOpen} onClose={onClose} />
    </>
  );
}
