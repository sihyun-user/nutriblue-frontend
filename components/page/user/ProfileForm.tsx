'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { profileSchema, type ProfileSchemaType } from '@/schemas/user';
import { useUserInfo } from '@/providers/UserProvider';
import useUpdateUser from '@/feature/user/useUpdateUser';
import DateSelector from '@/components/ui/DateSelector';
import InputRow from '@/components/ui/InputRow';
import RadioRow from '@/components/ui/RadioRow';
import SelectRows from '@/components/ui/SelectRows';
import BaseButton from '@/components/ui/BaseButton';

const sportLeveLList = [
  { id: 'underSport', name: '幾乎不運動' },
  { id: 'normalSport', name: '每週運動 1-3 天' },
  { id: 'moderateSport', name: '每週運動 3-5 天' },
  { id: 'severeSport', name: '每週運動 6-7 天' },
  { id: 'overSport', name: '長時間運動或體力勞動工作' }
];

const fitnessLeveLList = [
  { id: 'loseFat', name: '減脂' },
  { id: 'gentleLoseFat', name: '溫和減脂 (減少肌肉流失)' },
  { id: 'keepWeight', name: '維持體重' },
  { id: 'gentleAddFat', name: '溫和增肌 (減少體質積累)' },
  { id: 'addFat', name: '增肌' }
];

export default function ProfileForm() {
  const { updateUser, isPending } = useUpdateUser();

  const userInfo = useUserInfo();

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors }
  } = useForm<ProfileSchemaType>({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
    defaultValues: {
      name: userInfo?.name,
      gender: userInfo?.gender,
      birthday: userInfo?.birthday,
      height: userInfo?.weight,
      weight: userInfo?.height,
      sport_level: userInfo?.sport_level,
      fitness_level: userInfo?.fitness_level
    }
  });

  const onSubmit: SubmitHandler<ProfileSchemaType> = (data) => {
    updateUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 py-4">
      <div className="grid grid-cols-2 gap-5">
        <InputRow
          variation="secondary"
          register={register}
          label="名稱"
          id="name"
          errors={errors}
        />
        <InputRow
          label="E-mail"
          id="email"
          setValue={userInfo?.email}
          disabled
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <DateSelector
          initDate={getValues('birthday')}
          control={control}
          position="right"
          id="birthday"
          label="生日"
        />
        <RadioRow
          control={control}
          label="性別"
          id="gender"
          type="number"
          list={{ 0: '男', 1: '女' }}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <InputRow
          variation="secondary"
          register={register}
          label="身高"
          id="height"
          type="number"
          fixedRight="公分"
          errors={errors}
        />
        <InputRow
          variation="secondary"
          register={register}
          label="體重"
          id="weight"
          type="number"
          fixedRight="公斤"
          errors={errors}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <SelectRows
          id="sport_level"
          label="運動量"
          list={sportLeveLList}
          control={control}
        />
        <SelectRows
          id="fitness_level"
          label="健身目標"
          list={fitnessLeveLList}
          control={control}
        />
      </div>
      <BaseButton className="min-w-[80px]" type="submit" disabled={isPending}>
        確認修改
      </BaseButton>
    </form>
  );
}
