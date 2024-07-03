'use client';

import { useState, useCallback, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import { IPagination } from '@/types';
import useSetParams from '@/hooks/useSetParams';

interface PaginatedNumbers {
  totalPages: number;
  targetPage: number;
  maxPageNumberLimit: number;
  minPageNumberLimit: number;
  handleCurrentPage: (pageNumber: number) => void;
}

const PaginatedNumbers = ({
  totalPages,
  targetPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  handleCurrentPage
}: PaginatedNumbers) => {
  return Array.from({ length: totalPages }, (num, index) => {
    const pageNumber = index + 1;
    if (pageNumber <= maxPageNumberLimit && pageNumber > minPageNumberLimit)
      return (
        <button
          type="button"
          key={pageNumber}
          onClick={() => handleCurrentPage(pageNumber)}
          className={`${
            targetPage === pageNumber
              ? 'bg-cyan-500 text-white'
              : 'bg-white hover:bg-gray-100'
          } flex items-center border border-gray-300 px-4 py-2 text-sm font-medium`}
        >
          {pageNumber}{' '}
        </button>
      );

    return null;
  });
};

export default function Pagination({ data }: { data: IPagination }) {
  const { firstPage, lastPage, empty, totalPages, targetPage } = data;

  const { handleSetParams } = useSetParams();
  const [pageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const handleCurrentPage = useCallback(
    (page: number) => {
      handleSetParams('pageIndex', page);
    },
    [handleSetParams]
  );

  function nextPage() {
    const next = lastPage ? targetPage : targetPage + 1;
    handleCurrentPage(next);
  }

  function prevPage() {
    const prev = firstPage ? 1 : targetPage - 1;
    handleCurrentPage(prev);
  }

  useEffect(() => {
    if (targetPage > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    if (targetPage <= minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }, [targetPage, minPageNumberLimit, maxPageNumberLimit, pageNumberLimit]);

  if (!empty)
    return (
      <div className="flex items-center justify-between sm:px-6">
        <div className="flex flex-1 items-center justify-between sm:hidden">
          <button
            type="button"
            onClick={prevPage}
            disabled={firstPage}
            className="cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            上一頁
          </button>
          <span className="font-medium">
            第 {targetPage} 頁 / 共 {totalPages} 頁
          </span>
          <button
            type="button"
            onClick={nextPage}
            disabled={lastPage}
            className="ml-3 inline-flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            下一頁
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-center">
          <nav className="isolate inline-flex -space-x-px rounded-md bg-white shadow-sm">
            <button
              type="button"
              onClick={prevPage}
              disabled={firstPage}
              className="flex cursor-pointer items-center rounded-l-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <span>上一頁</span>
              <ChevronLeftIcon className="size-5" />
            </button>
            <PaginatedNumbers
              totalPages={totalPages}
              targetPage={targetPage}
              minPageNumberLimit={minPageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              handleCurrentPage={handleCurrentPage}
            />
            <button
              type="button"
              onClick={nextPage}
              disabled={lastPage}
              className="flex cursor-pointer items-center rounded-r-md p-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <span>下一頁</span>
              <ChevronRightIcon className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    );
}
