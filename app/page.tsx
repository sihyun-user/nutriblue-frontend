import Link from 'next/link';
import Image from 'next/image';

import banner from '@/public/banner.png';
import Logo from '@/components/ui/Logo';
import BaseButton from '@/components/ui/BaseButton';

export default function Page() {
  return (
    <>
      <header className="absolute top-0 flex h-[80px] w-full items-center justify-between px-4 md:px-10">
        <Logo />
        <div className="flex gap-4">
          <BaseButton>
            <Link href="/login">登入</Link>
          </BaseButton>
          <BaseButton variation="secondary">
            <Link href="/signup">註冊</Link>
          </BaseButton>
        </div>
      </header>
      <div className="m-auto flex min-h-screen max-w-screen-2xl flex-col-reverse items-center justify-center p-4 pt-[50px] lg:flex-row lg:items-start lg:justify-between lg:pt-[150px]">
        <div className="flex w-full max-w-[500px] flex-col md:pt-12">
          <h1 className="text-[40px] text-blue-500 md:text-[54px]">
            NutriBlue
          </h1>
          <h2 className="text-xl md:text-2xl">飲食日記與全面營養資訊平台</h2>
          <p className="my-6 md:my-8">
            NutriBlue
            是您的飲食日記和營養指南的最佳夥伴。通過記錄每日飲食習慣，了解每餐的營養成分，並查詢大量健康食品資料庫，幫助您做出更明智的飲食選擇，達成健康生活目標。立即加入我們，開啟您的健康飲食之旅！
          </p>
          <div>
            <BaseButton variation="secondary" className="w-full sm:w-[240px]">
              <Link href="/login">立即免費使用</Link>
            </BaseButton>
          </div>
        </div>
        <div className="relative h-[300px] w-full sm:h-[480px] lg:h-[600px] 2xl:h-[750px]">
          <Image
            src={banner}
            quality={80}
            priority
            fill
            sizes="100%"
            className="object-contain 2xl:object-cover"
            alt="NutriBlue Banner"
          />
        </div>
      </div>
    </>
  );
}
