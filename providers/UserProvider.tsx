'use client';

import { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { type UserInfoType } from '@/types/user';
import useUser from '@/feature/user/useUser';
import Spinner from '@/components/Spinner';

const UsersContext = createContext<UserInfoType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isPending } = useUser();

  useEffect(() => {
    if (!user && !isPending) router.push('/login');
  }, [user, isPending, router]);

  if (isPending) return <Spinner />;

  return <UsersContext.Provider value={user}>{children}</UsersContext.Provider>;
}

export const useUserInfo = () => useContext(UsersContext);
