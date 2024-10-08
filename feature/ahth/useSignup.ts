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
      router.replace('/home?showDialog=true');
      toast.success('註冊成功');
    },
    onError: (error) => notifyError(error)
  });

  return { signup, isPending };
}
