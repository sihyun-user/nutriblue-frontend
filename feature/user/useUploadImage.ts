'use client';

import { useMutation } from '@tanstack/react-query';

import { uploadImage as uploadImageApi } from '@/api/user';
import notifyError from '@/utils/notifyError';

export default function useUploadImage() {
  const { mutate: uploadImage, isPending: isUploading } = useMutation({
    mutationFn: uploadImageApi,
    onError: (error) => notifyError(error)
  });

  return { uploadImage, isUploading };
}
