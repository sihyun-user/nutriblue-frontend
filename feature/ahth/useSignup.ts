'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import notifyError from '@/utils/notifyError';
import { signup as signupApi } from '@/api/auth';

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export default function useSignup() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data: SignupData) => signupApi(data),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      router.push('/');
    },
    onError: (error) => notifyError(error)
  });

  return { signup, isPending };
}
