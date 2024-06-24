'use client';

import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@headlessui/react';
import clsx from 'clsx';

import FormRow from '@/components/FormRow';
import BaseButton from '@/components/BaseButton';
import useSignup from '@/feature/ahth/useSignup';

interface ISignupForm {
  name: string;
  email: string;
  password: string;
}

const inputStyle = clsx(
  'w-full rounded-lg bg-primary-100 px-3 py-2.5 text-sm text-primary-800 outline-none outline-1 -outline-offset-1 outline-primary-100',
  'transition-all duration-200 hover:bg-primary-200 focus:bg-white'
);

export default function SignupClient() {
  const router = useRouter();
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignupForm>();

  const onSubmit: SubmitHandler<ISignupForm> = (data) => signup(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[470px] rounded-2xl bg-white p-8 shadow-lg"
    >
      <h1 className="mb-4 text-2xl font-medium">註冊</h1>
      <div className="space-y-5">
        <div className="space-y-4">
          <FormRow
            label="名稱"
            lebelStyle="text-sm"
            error={errors?.name?.message}
          >
            <Input
              className={inputStyle}
              type="text"
              id="name"
              placeholder="名稱"
              {...register('name', {
                required: '請輸入名稱',
                validate: (value) =>
                  (value !== undefined &&
                    value.length >= 2 &&
                    value.length <= 12 &&
                    /^[^\s!@#$%^&*()+=\-[\]\\';,./{}|":<>?~_]+$/.test(value)) ||
                  '名稱需為2到12個字元，且不可包含空白及特殊符號'
              })}
            />
          </FormRow>
          <FormRow
            label="Email"
            lebelStyle="text-sm"
            error={errors?.email?.message}
          >
            <Input
              className={inputStyle}
              type="text"
              id="email"
              placeholder="Email"
              {...register('email', {
                required: '請輸入Email',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: '請輸入正確的Email格式'
                }
              })}
            />
          </FormRow>
          <FormRow
            label="密碼"
            lebelStyle="text-sm"
            error={errors?.password?.message}
          >
            <Input
              className={inputStyle}
              type="text"
              id="password"
              placeholder="密碼"
              {...register('password', {
                required: '請輸入密碼',
                minLength: { value: 6, message: '密碼長度需大於 6 個字元' }
              })}
            />
          </FormRow>
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
