'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { login as loginApi } from '@/api/auth';
import notifyError from '@/utils/notifyError';

interface ILogin {
  email: string;
  password: string;
}

export default function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: ILogin) => loginApi(data),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      router.push('/');
    },
    onError: (error) => notifyError(error)
  });

  return { login, isPending };
}
