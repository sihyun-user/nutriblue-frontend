'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import BaseButton from '@/components/ui/BaseButton';
import useSignup from '@/feature/ahth/useSignup';
import InputRow from '@/components/ui/InputRow';

const signupSchema = z.object({
  name: z
    .string({ required_error: '名稱為必填欄位' })
    .refine(
      (value) =>
        value.length >= 2 &&
        value.length <= 12 &&
        /[^\s!@#$%^&*()+=\-[\]\\';,./{}|":<>?~_]/.test(value),
      {
        message: '名稱需為2到12個字元，且不可包含空白及特殊符號'
      }
    ),
  email: z
    .string({ required_error: 'Email為必填欄位' })
    .email('請輸入正確的Eamil格式'),
  password: z
    .string({ required_error: '密碼為必填欄位' })
    .min(6, '密碼長度需大於 6 個字元')
});

type SignupSchemaType = z.infer<typeof signupSchema>;

export default function SignupClient() {
  const router = useRouter();
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<SignupSchemaType> = (data) => signup(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[470px] rounded-2xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-4 text-2xl font-medium">註冊</h1>
      <div className="space-y-5">
        <div className="space-y-4">
          <InputRow
            register={register}
            label="名稱"
            id="name"
            errors={errors}
          />
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
          註冊
        </BaseButton>
        <div className="flex border-b border-primary-200" />
        <div className="flex items-center justify-between">
          <span>已經有帳號嗎?</span>
          <BaseButton onClick={() => router.push('/login')}>登入</BaseButton>
        </div>
      </div>
    </form>
  );
}
