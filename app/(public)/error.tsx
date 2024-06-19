'use client';

interface Props {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">404，頁面發生錯誤，請稍後再試 !</h1>
      <p className="text-lg">{error.message}</p>
    </main>
  );
}
