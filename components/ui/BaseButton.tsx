'use client';

import { Button } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variation?: string;
  full?: boolean;
  rounded?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const variations: { [key: string]: string } = {
  primary: 'text-white bg-blue-400 data-[hover]:bg-blue-500',
  secondary: 'text-white bg-blue-600 data-[hover]:bg-blue-700',
  gray: 'text-white bg-gray-400 data-[hover]:bg-gray-500',
  cyan: 'text-white bg-cyan-400 data-[hover]:bg-cyan-500'
};

export default function BaseButton({
  type = 'button',
  disabled = false,
  full = false,
  rounded = false,
  variation = 'primary',
  className = undefined,
  onClick = () => {},
  children
}: Props) {
  const variationStyle = variation ? variations[variation] : '';

  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'flex h-10 min-w-[60px] items-center justify-center gap-1 rounded px-3 text-sm transition-all duration-200',
        className,
        variationStyle,
        { 'rounded-full': rounded },
        { 'w-full': full }
      )}
    >
      {disabled ? <div className="spinner-mini" /> : children}
    </Button>
  );
}
