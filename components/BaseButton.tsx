import { Button } from '@headlessui/react';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variation?: 'primary';
  children: React.ReactNode;
  onClick?: () => void;
}

const variations = {
  primary: 'bg-blue-600 data-[hover]:bg-blue-700'
};

export default function BaseButton({
  type = 'button',
  disabled = false,
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
      className={`flex h-10 min-w-24 items-center justify-center gap-1 rounded px-2 text-sm text-white ${variationClass}`}
    >
      {children}
    </Button>
  );
}
