export default function Overlay({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-20 block min-h-screen w-full bg-black opacity-30 transition-opacity duration-500"
    />
  );
}
