import { IPagination } from '@/types';

interface Props {
  data: IPagination;
  pageSize: number;
}

export default function PageResults({ data, pageSize }: Props) {
  const { lastPage, targetPage, elementCount } = data;

  return (
    <p className="text-gray-700">
      目前{' '}
      <span className="font-medium">{(targetPage - 1) * pageSize + 1}</span> 到{' '}
      <span className="font-medium" />{' '}
      {lastPage ? elementCount : targetPage * pageSize} 共{' '}
      <span className="font-medium">{elementCount}</span> 項目
    </p>
  );
}
