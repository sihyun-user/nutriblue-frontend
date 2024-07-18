'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';

export default function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  function logout() {
    Cookies.remove('refreshToken');
    Cookies.remove('token');
    queryClient.removeQueries();
    router.replace('/login');
    toast.success('登出成功');
  }

  return { logout };
}
