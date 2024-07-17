'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import notifyError from '@/utils/notifyError';
import { signup as signupApi } from '@/api/auth';

export default function useSignup() {
  const router = useRouter();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success('註冊成功');
      router.push('/home');
    },
    onError: (error) => notifyError(error)
  });

  return { signup, isPending };
}
