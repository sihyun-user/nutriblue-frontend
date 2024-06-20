interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Overlay({ open, onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className={`fixed left-0 top-0 z-20 block min-h-screen w-full bg-black transition-opacity duration-500 ${open ? 'opacity-30' : 'pointer-events-none opacity-0'}`}
    />
  );
}
