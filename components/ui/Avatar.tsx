import { UserCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import clsx from 'clsx';
import { useUserInfo } from '@/providers/UserProvider';

const sizes = {
  small: '32',
  medium: '40',
  legend: '105'
};

interface Props {
  size?: 'small' | 'medium' | 'legend';
  opacity?: boolean;
}

export default function Avatar({ size = 'small', opacity = false }: Props) {
  const userInfo = useUserInfo();
  const isOpacity = opacity ? 'opacity-25' : '';
  const sizeValue = sizes[size] as string;
  const sizePx = `size-[${sizeValue}px]`;

  return userInfo && userInfo.avatar ? (
    <div
      className={clsx(
        isOpacity,
        sizePx,
        'relative overflow-hidden rounded-full'
      )}
    >
      <Image
        src={userInfo.avatar}
        quality={60}
        fill
        priority
        className="object-cover"
        alt="avatar"
      />
    </div>
  ) : (
    <UserCircleIcon className={clsx(isOpacity, sizePx)} />
  );
}
