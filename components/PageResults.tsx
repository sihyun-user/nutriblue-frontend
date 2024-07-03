import { useSearchParams } from 'next/navigation';

import { IPagination } from '@/types';

interface Props {
  data: IPagination;
  pageSize: number;
}

export default function PageResults({ data, pageSize }: Props) {
  const searchParams = useSearchParams();

  const { lastPage, targetPage, elementCount } = data;

  const query = searchParams.get('query') || '';

  return (
    <p className="text-gray-700">
      {query ? `搜尋結果: [${query}] ` : ''}
      目前{' '}
      <span className="font-medium">{(targetPage - 1) * pageSize + 1}</span>
      {' 到 '}
      <span className="font-medium">
        {lastPage
          ? elementCount
          : Math.min(targetPage * pageSize, elementCount)}
      </span>
      {' 共 '}
      <span className="font-medium">{elementCount}</span> 項目
    </p>
  );
}
