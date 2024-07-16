'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { securitySchema, type SecuritySchemaType } from '@/schemas/user';
import useUpdatePassword from '@/feature/user/useUpdatePassword';
import InputRow from '@/components/ui/InputRow';
import BaseButton from '@/components/ui/BaseButton';

export default function SecurityForm() {
  const { updatePassword, isPending } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SecuritySchemaType>({
    resolver: zodResolver(securitySchema),
    mode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit: SubmitHandler<SecuritySchemaType> = (data) => {
    updatePassword(data, {
      onSettled: () => {
        reset();
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm space-y-6 px-6 py-4"
    >
      <InputRow
        variation="secondary"
        register={register}
        label="新密碼"
        id="password"
        type="password"
        placeholder="請輸入新密碼"
        errors={errors}
      />
      <InputRow
        variation="secondary"
        register={register}
        label="確認新密碼"
        placeholder="請再次輸入新密碼"
        type="password"
        id="confirmPassword"
        errors={errors}
      />
      <BaseButton className="min-w-[80px]" type="submit" disabled={isPending}>
        確認修改
      </BaseButton>
    </form>
  );
}
