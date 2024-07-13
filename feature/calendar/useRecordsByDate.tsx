import { useState } from 'react';
import { useQueryClient, useMutation } from '@tanstack/react-query';

import { IRecord } from '@/types/record';
import { getRecordsByDate as getRecordsByDateApi } from '@/api/record';
import notifyError from '@/utils/notifyError';

export default function useRecordsByDate() {
  const queryClient = useQueryClient();
  const currentRecords: Record<string, IRecord[]> =
    queryClient.getQueryData(['records']) || {};
  const [recordsData, setRecordsData] =
    useState<Record<string, IRecord[]>>(currentRecords);

  const { mutate: getRecordsByDate, isPending } = useMutation({
    mutationFn: (dateId: string) => getRecordsByDateApi(dateId),
    onSuccess: (data, variables) => {
      const newRecords = { ...currentRecords, [variables]: data };
      queryClient.setQueryData(['records'], newRecords);
      setRecordsData(newRecords);
    },
    onError: (error) => notifyError(error)
  });

  return { recordsData, getRecordsByDate, isPending };
}
