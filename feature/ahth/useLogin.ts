'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login as loginApi } from '@/api/auth';
import notifyError from '@/utils/notifyError';

interface ILogin {
  email: string;
  password: string;
}

export default function useLogin() {
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: ILogin) => loginApi(data),
    onSuccess: () => router.push('/'),
    onError: (error) => notifyError(error)
  });

  return { login, isPending };
}
