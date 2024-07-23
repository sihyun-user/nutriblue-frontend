'use client';

import { useQuery } from '@tanstack/react-query';

import { getAnalyzeResultsByDate } from '@/api/user';

export default function useAnalyzeResults() {
  const { data, isPending } = useQuery({
    queryKey: ['dashboard', 'analyze-results'],
    queryFn: getAnalyzeResultsByDate,
    retry: false
  });

  return { data, isPending };
}
