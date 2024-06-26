'use client';

import { useState, useEffect } from 'react';
import { Select } from '@headlessui/react';
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

import { IFood } from '@/types/food';
import Dialog from '@/components/dialog/Dialog';
import InputRow from '@/components/ui/InputRow';
import BaseButton from '@/components/ui/BaseButton';
import NutritionRows from './NutritionRows';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: IFood;
}

export default function AddFood({ isOpen, onClose, data }: Props) {
  const [newDiary, setNewDiary] = useState(false);

  useEffect(() => {
    setNewDiary(false);
  }, [isOpen]);

  if (data)
    return (
      <Dialog title="食品的營養成分" isOpen={isOpen} onClose={onClose}>
        <div className="mb-6 space-y-2 rounded-lg bg-blue-100 p-4">
          <div className="flex justify-between">
            <div className="space-y-3">
              <div>
                <h1 className="text-xl font-semibold text-primary-800">
                  {data.name}
                </h1>
                {data.brand_name && (
                  <span className="mt-1 text-sm font-medium">
                    ({data.brand_name})
                  </span>
                )}
              </div>
              {data.verified && (
                <div className="group flex cursor-pointer items-center gap-1">
                  <CheckCircleIcon className="size-5 text-green-600" />
                  <span className="text-xs font-medium text-green-600 group-hover:text-green-700">
                    了解更多
                  </span>
                </div>
              )}
            </div>
            {!newDiary && (
              <BaseButton onClick={() => setNewDiary(true)}>
                <PlusIcon className="size-5" />
                加入日記
              </BaseButton>
            )}
          </div>
          <div className="space-y-4">
            <div>
              份數:
              <div className="grid grid-cols-2 gap-4">
                <InputRow
                  variation="secondary"
                  id="nutrition_multiplier"
                  defaultValue={data.serving_size.nutrition_multiplier}
                />
                <Select name="status" aria-label="Project status">
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                  <option value="delayed">Delayed</option>
                  <option value="canceled">Canceled</option>
                </Select>
              </div>
            </div>
            {newDiary && (
              <div>
                <div className="grid grid-cols-2 gap-4">
                  <InputRow
                    variation="secondary"
                    id="diary_name"
                    label="餐飲名稱"
                  />
                  <InputRow
                    variation="secondary"
                    id="diary_date"
                    label="日期"
                  />
                </div>
                <div className="mt-8 flex justify-end gap-6">
                  <BaseButton
                    variation="gray"
                    onClick={() => setNewDiary(false)}
                  >
                    取消
                  </BaseButton>
                  <BaseButton>確定</BaseButton>
                </div>
              </div>
            )}
          </div>
        </div>
        <h6 className="mb-3 text-lg font-semibold">營養成分</h6>
        <div className="grid grid-cols-2 gap-4">
          <NutritionRows data={data.nutritions} />
        </div>
      </Dialog>
    );
}
