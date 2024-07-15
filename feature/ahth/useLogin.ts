'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login as loginApi } from '@/api/auth';
import notifyError from '@/utils/notifyError';

export default function useLogin() {
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => router.push('/'),
    onError: (error) => notifyError(error)
  });

  return { login, isPending };
}
