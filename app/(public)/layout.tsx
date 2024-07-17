import { UserProvider } from '@/providers/UserProvider';
import NavBar from '@/components/navbar/NavBar';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <NavBar />
      <section className="container-page">{children}</section>
    </UserProvider>
  );
}
