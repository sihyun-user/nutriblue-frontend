import UserMenu from '@/components/page/user/UserMenu';

export default function UserLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-page-screen m-auto flex w-full max-w-[1000px] flex-col rounded-lg bg-white md:flex-row">
      <div className="mb-4 min-w-[280px] flex-none border-r border-gray-200 p-6 md:mb-0 md:flex-1">
        <UserMenu />
      </div>
      <div className="w-full max-w-full md:max-w-[648px]">{children}</div>
    </div>
  );
}
