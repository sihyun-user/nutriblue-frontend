'use client';

import { useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [keyword, setKeyword] = useState(searchParams.get('query') || '');

  function handleSearchKeyword(query: string) {
    const params = new URLSearchParams(searchParams);
    params.set('query', query);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!keyword) return;

    handleSearchKeyword(keyword);
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="m-auto flex h-12 w-full max-w-96 items-center justify-center rounded-2xl border-primary-200 bg-white px-3 py-1 text-primary-500 focus-within:border focus-within:shadow-1">
        <MagnifyingGlassIcon className="mr-3 size-7" />
        <input
          type="text"
          className="w-full bg-white placeholder:text-primary-500 focus:outline-none"
          placeholder="搜尋"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <input type="submit" className="hidden" />
        <span className="whitespace-nowrap">ctrl + k</span>
      </div>
    </form>
  );
}
