import { UserProvider } from '@/providers/UserProvider';
import NavBar from '@/components/navbar/NavBar';
import GoTop from '@/components/ui/GoTop';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <NavBar />
      <GoTop />
      <section className="container-page">{children}</section>
    </UserProvider>
  );
}
