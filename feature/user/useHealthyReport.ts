'use client';

import { useQuery } from '@tanstack/react-query';

import { getHealthyReportByDate } from '@/api/user';

export default function useHealthyReport() {
  const { data, isPending } = useQuery({
    queryKey: ['healthyReport'],
    queryFn: getHealthyReportByDate,
    retry: false
  });

  return { data, isPending };
}
