'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { updateAvatar as updateAvatarApi } from '@/api/user';
import notifyError from '@/utils/notifyError';

export default function useUpadteAvatar() {
  const queryClient = useQueryClient();

  const { mutate: updateAvatar, isPending: isUpdating } = useMutation({
    mutationFn: updateAvatarApi,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data);
      toast.success('更新個人頭像成功');
    },
    onError: (error) => notifyError(error)
  });

  return { updateAvatar, isUpdating };
}
