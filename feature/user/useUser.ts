'use client';

import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/api/user';

export default function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    retry: false // retry:false => 可以關閉自動重試(預設情況下發生錯誤時會自動重試3次)
  });

  return { user: user ?? null, isPending };
}
