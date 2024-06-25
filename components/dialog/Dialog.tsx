import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';

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
    // <>
    //   <Dialog open={isOpen} onClose={onClose} className="relative z-50">
    //     <div className="fixed inset-0 flex w-screen items-center justify-center">
    //       <div className="overflow-hidden rounded-lg border border-primary-200 bg-white shadow-md">
    //         <DialogPanel className="max-h-[600px] w-full max-w-[520px] overflow-auto p-6">
    //           <div className="space-y-6">
    //             <DialogTitle className="text-2xl font-bold">
    //               {title}
    //             </DialogTitle>
    //             {children}
    //           </div>
    //           <div className="mt-9 flex gap-4">
    //             <BaseButton onClick={onClose}>取消</BaseButton>
    //             <BaseButton onClick={onClose}>確認</BaseButton>
    //           </div>
    //         </DialogPanel>
    //       </div>
    //     </div>
    //   </Dialog>
    //   <Overlay open={isOpen} onClose={onClose} />
    // </>
    <>
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <div className="w-full max-w-[520px] overflow-hidden rounded-lg bg-white shadow-md">
            <DialogPanel className="relative">
              <XMarkIcon
                className="absolute right-3 top-3 size-8 cursor-pointer"
                onClick={onClose}
              />
              <DialogTitle className="border-b border-primary-200 px-6 py-3 text-2xl font-bold">
                {title}
              </DialogTitle>
              <div className="max-h-[600px] overflow-auto p-6">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Overlay open={isOpen} onClose={onClose} />
    </>
  );
}
