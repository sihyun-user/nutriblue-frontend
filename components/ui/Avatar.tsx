import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import clsx from 'clsx';
import { useUserInfo } from '@/providers/UserProvider';

interface Props {
  size: number | string;
  opacity?: boolean;
}

export default function Avatar({ size, opacity = false }: Props) {
  const userInfo = useUserInfo();
  const isOpacity = opacity ? 'opacity-25' : '';

  return userInfo && userInfo.avatar ? (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={clsx(isOpacity, 'relative overflow-hidden rounded-full')}
    >
      <Image
        src={userInfo.avatar}
        quality={60}
        priority
        fill
        sizes="100%"
        className="object-cover"
        alt="avatar"
      />
    </div>
  ) : (
    <UserCircleIcon
      className={clsx(isOpacity)}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
