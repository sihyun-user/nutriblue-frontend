'use client';

import { useQuery } from '@tanstack/react-query';

import { getHealthyReportByDate } from '@/api/user';

export default function useHealthyReport() {
  const { data, isPending } = useQuery({
    queryKey: ['dashboard', 'healthy-report'],
    queryFn: getHealthyReportByDate,
    retry: false
  });

  return { data, isPending };
}
