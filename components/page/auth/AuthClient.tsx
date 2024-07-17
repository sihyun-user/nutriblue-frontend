import Logo from '@/components/ui/Logo';

export default function AuthClient({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="absolute top-0 flex h-[80px] w-full items-center justify-center">
        <Logo />
      </header>
      <div className="flex items-center justify-center p-4 pt-[80px] md:min-h-screen">
        {children}
      </div>
    </>
  );
}
