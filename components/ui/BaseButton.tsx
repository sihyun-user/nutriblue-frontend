'use client';

import { Button } from '@headlessui/react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variation?: 'primary' | 'secondary' | 'gray';
  full?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const variations = {
  primary: 'bg-blue-400 data-[hover]:bg-blue-500',
  secondary: 'bg-blue-600 data-[hover]:bg-blue-700',
  gray: 'bg-gray-400 data-[hover]:bg-gray-500'
};

export default function BaseButton({
  type = 'button',
  disabled = false,
  full = false,
  variation = 'primary',
  onClick = () => {},
  children
}: Props) {
  const variationClass = variation ? variations[variation] : '';

  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex h-10 min-w-24 items-center justify-center gap-1 rounded px-2 text-sm text-white transition-all duration-200 ${variationClass} ${full ? 'w-full' : ''}`}
    >
      {children}
    </Button>
  );
}
