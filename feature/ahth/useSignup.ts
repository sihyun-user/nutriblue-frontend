'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import notifyError from '@/utils/notifyError';
import { signup as signupApi } from '@/api/auth';

export default function useSignup() {
  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => router.push('/'),
    onError: (error) => notifyError(error)
  });

  return { signup, isPending };
}
