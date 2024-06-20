'use client';

import { useState } from 'react';
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';

import BaseButton from '../BaseButton';

export default function FoodModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BaseButton onClick={() => setIsOpen(true)}>
        <PlusIcon className="size-5" />
        新增食品
      </BaseButton>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 rounded-lg border bg-white p-4 shadow-md">
            <DialogTitle className="text-lg font-bold">新增食品</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button type="button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button type="button" onClick={() => setIsOpen(false)}>
                Deactivate
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
