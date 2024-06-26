'use client';

import { useQuery } from '@tanstack/react-query';

import { getUser } from '@/api/user';

export default function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  });

  return { user, isPending };
}
