'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import useLogin from '@/feature/ahth/useLogin';
import BaseButton from '@/components/ui/BaseButton';
import InputRow from '@/components/ui/InputRow';

const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email為必填欄位' })
    .email('請輸入正確的Eamil格式'),
  password: z
    .string({ required_error: '密碼為必填欄位' })
    .min(6, '密碼長度需大於 6 個字元')
});

type LoginSchemaType = z.infer<typeof loginSchema>;

export default function LoginClient() {
  const router = useRouter();
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginSchemaType> = (data) => login(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[470px] rounded-2xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-4 text-2xl font-medium">登入</h1>
      <div className="space-y-5">
        <div className="space-y-4">
          <InputRow
            register={register}
            label="Email"
            id="email"
            errors={errors}
          />
          <InputRow
            register={register}
            label="密碼"
            id="password"
            type="password"
            errors={errors}
          />
        </div>
        <BaseButton full type="submit" disabled={isPending}>
          登入
        </BaseButton>
        <div className="flex border-b border-primary-200" />
        <div className="flex items-center justify-between">
          <span>還沒有帳號嗎?</span>
          <BaseButton onClick={() => router.push('/signup')}>註冊</BaseButton>
        </div>
      </div>
    </form>
  );
}
