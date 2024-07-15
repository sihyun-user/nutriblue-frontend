import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';

import { useUserInfo } from '@/providers/UserProvider';
import avatar from '@/public/avatar.jpg';

const sizes = {
  small: 'size-[32px]',
  medium: 'size-[40px]',
  legend: 'size-[105px]'
};

interface Props {
  size?: 'small' | 'medium' | 'legend';
}

export default function Avatar({ size = 'small' }: Props) {
  const userInfo = useUserInfo();

  return userInfo && userInfo.avatar ? (
    <div className={`${sizes[size]} overflow-hidden`}>
      <Image
        src={avatar}
        quality={60}
        className="size-full rounded-full object-cover"
        alt="avatar"
      />
    </div>
  ) : (
    <UserCircleIcon className={sizes[size]} />
  );
}
