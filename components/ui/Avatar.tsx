import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';

import { useUserInfo } from '@/providers/UserProvider';
import avatar from '@/public/avatar.jpg';

export default function Avatar({ isLegend = false }: { isLegend?: boolean }) {
  const user = useUserInfo();
  const containerSize = isLegend ? 'size-[40px]' : 'size-[32px]';
  const iconSize = isLegend ? 'size-10' : 'size-8';

  return user && user.avatar ? (
    <div className={`${containerSize} overflow-hidden`}>
      <Image
        src={avatar}
        quality={60}
        className="size-full rounded-full object-cover"
        alt="avatar"
      />
    </div>
  ) : (
    <UserCircleIcon className={iconSize} />
  );
}
