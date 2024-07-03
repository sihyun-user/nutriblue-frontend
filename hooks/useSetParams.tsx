import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function useSetParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSetParams = useCallback(
    (paramName: string, paramValue: string | number) => {
      const params = new URLSearchParams(searchParams);
      params.set(paramName, paramValue.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: true });
    },
    [router, searchParams, pathname]
  );

  return { handleSetParams };
}
