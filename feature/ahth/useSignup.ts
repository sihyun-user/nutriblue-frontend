'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import notifyError from '@/utils/notifyError';
import { signup as signupApi } from '@/api/auth';

interface SignupData {
  name: string;
  email: string;
  password: string;
}

export default function useSignup() {
  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data: SignupData) => signupApi(data),
    onSuccess: () => router.push('/'),
    onError: (error) => notifyError(error)
  });

  return { signup, isPending };
}
