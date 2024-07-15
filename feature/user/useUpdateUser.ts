'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateUser as updateUserApi } from '@/api/user';
import notifyError from '@/utils/notifyError';

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      toast.success('更新個人資訊成功');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => notifyError(error)
  });

  return { updateUser, isPending };
}
