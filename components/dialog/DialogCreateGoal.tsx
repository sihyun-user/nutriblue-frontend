import { Dialog, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

import BaseButton from '../ui/BaseButton';
import Overlay from '../Overlay';

interface Props {
  isOpen: boolean;
}

export default function DialogCreateGoal({ isOpen }: Props) {
  return (
    <>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => {}}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center px-4">
            <div className="w-[350px] rounded-xl bg-white shadow-md">
              <DialogPanel className="relative">
                <div className="flex flex-col items-center gap-4 p-6">
                  <ExclamationTriangleIcon className="size-10 text-green-500" />
                  <h3 className="mb-2 font-medium text-primary-800">
                    註冊完成後，請先前往個人資料頁建立你的營養目標。
                  </h3>
                </div>
                <div className="flex w-full justify-end gap-4 border-t border-primary-300 p-2">
                  <BaseButton className="w-16" rounded variation="cyan">
                    <Link href="/user/profile">前往</Link>
                  </BaseButton>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )}
      <Overlay open={isOpen} />
    </>
  );
}
