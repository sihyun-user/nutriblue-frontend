'use client';

import { useEffect, createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

import { type UserInfoType } from '@/types';
import useUser from '@/feature/user/useUser';
import FullPageSpinner from '@/components/FullPageSpinner';

const UsersContext = createContext<UserInfoType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isPending } = useUser();

  useEffect(() => {
    if (!user && !isPending) {
      router.push('/login');
    }
  }, [user, isPending, router]);

  if (isPending) return <FullPageSpinner />;

  if (user)
    return (
      <UsersContext.Provider value={user}>{children}</UsersContext.Provider>
    );
}

export const useUserInfo = () => useContext(UsersContext);
