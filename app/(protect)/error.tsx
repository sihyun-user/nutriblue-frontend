'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">
        404，頁面發生錯誤，請稍後再試 !
      </h1>
      <p className="text-lg">{error.message}</p>
    </main>
  );
}
