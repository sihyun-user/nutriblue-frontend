interface ButtonProps {
  children: React.ReactNode;
  variation: 'primary' | 'secondary';
}

const variations = {
  primary: 'text-white bg-blue-600 hover:bg-blue-700',
  secondary:
    'text-gray-600 bg-gray-100 border border-gray-200 hover:bg-gray-200'
};

export default function Button({
  variation = 'primary',
  children
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center gap-1 rounded px-4 py-2 shadow-sm ${variations[variation]}`}
    >
      {children}
    </button>
  );
}
