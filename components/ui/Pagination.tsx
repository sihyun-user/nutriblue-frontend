'use client';

import { useState, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { IPagination } from '@/types';

const PaginatedNumbers = ({
  totalPages,
  targetPage,
  handleCurrentPage,
  maxPageNumberLimit,
  minPageNumberLimit
}: {
  totalPages: number;
  targetPage: number;
  handleCurrentPage: (pageNumber: number) => void;
  maxPageNumberLimit: number;
  minPageNumberLimit: number;
}) => {
  return Array.from({ length: totalPages }, (num, index) => {
    if (index < maxPageNumberLimit + 1 && index > minPageNumberLimit)
      return (
        <button
          type="button"
          key={index}
          onClick={() => handleCurrentPage(index)}
          className={`${
            targetPage === index
              ? 'bg-cyan-500 text-white'
              : 'bg-white hover:bg-gray-100'
          } flex items-center border border-gray-300 px-4 py-2 text-sm font-medium`}
        >
          {index}{' '}
        </button>
      );

    return null;
  });
};

export default function Pagination({ data }: { data: IPagination }) {
  const { firstPage, lastPage, empty, totalPages, targetPage } = data;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageNumberLimit = 5;
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const handleCurrentPage = useCallback(
    (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('pageIndex', page.toString());
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, searchParams, pathname]
  );

  function nextPage() {
    const next = lastPage ? targetPage : targetPage + 1;
    handleCurrentPage(next);
    if (next > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function prevPage() {
    const prev = firstPage ? 1 : targetPage - 1;
    handleCurrentPage(prev);
    if (prev % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  if (!empty)
    return (
      <div className="flex items-center justify-between sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <div className="cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            上一頁
          </div>
          <div className="ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            下一頁
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-center">
          <nav className="isolate inline-flex -space-x-px rounded-md bg-white shadow-sm">
            <button
              type="button"
              className="flex cursor-pointer items-center rounded-l-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={prevPage}
              disabled={firstPage}
            >
              <span>上一頁</span>
              <ChevronLeftIcon className="size-5" />
            </button>
            <PaginatedNumbers
              totalPages={totalPages}
              targetPage={targetPage}
              handleCurrentPage={handleCurrentPage}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
            />
            <button
              type="button"
              className="flex cursor-pointer items-center rounded-r-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={nextPage}
              disabled={lastPage}
            >
              <span>下一頁</span>
              <ChevronRightIcon className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    );
}
