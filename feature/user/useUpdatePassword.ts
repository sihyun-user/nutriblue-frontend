'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updatePassword as updatePasswordApi } from '@/api/user';
import notifyError from '@/utils/notifyError';

export default function useUpdatePassword() {
  const queryClient = useQueryClient();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success('更新密碼成功');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => notifyError(error)
  });

  return { updatePassword, isPending };
}
