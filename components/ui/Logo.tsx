import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} priority height="35" alt="NutriBlue" />
    </Link>
  );
}
