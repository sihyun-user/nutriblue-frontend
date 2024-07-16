'use client';

import { useState, useEffect } from 'react';
import { PlusIcon, CheckCircleIcon } from '@heroicons/react/20/solid';

import { IFood } from '@/types/food';
import Dialog from '@/components/dialog/Dialog';
import BaseButton from '@/components/ui/BaseButton';
import NewRecord from './NewRecord';
import NutritionRows from './NutritionRows';

interface Props {
  isSelect: boolean;
  isClose: () => void;
  data: IFood | null;
}

export default function FoodItem({ isSelect, isClose, data }: Props) {
  const [newRecord, setNewRecord] = useState(false);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    setNewRecord(false);
  }, [isSelect]);

  if (data)
    return (
      <Dialog title="食品的營養成分" isOpen={isSelect} onClose={isClose}>
        <div className="mb-6 rounded-lg bg-blue-100 p-4">
          <div className="flex min-h-[40px] justify-between">
            <div className="w-8/12 space-y-3">
              <div>
                <h1 className="text-xl font-semibold text-primary-800">
                  {data.name}
                </h1>
                {data.brandName && (
                  <span className="mt-1 text-sm font-medium">
                    ({data.brandName})
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
            {!newRecord && (
              <BaseButton onClick={() => setNewRecord(true)}>
                <PlusIcon className="size-5" />
                新增紀錄
              </BaseButton>
            )}
          </div>
          <NewRecord
            food={data}
            newRecord={newRecord}
            closeNewRecord={() => setNewRecord(false)}
            handleClose={isClose}
            handleMultiplier={(value) => setMultiplier(value)}
          />
        </div>
        <h6 className="mb-3 text-lg font-semibold">營養成分</h6>
        <div className="grid grid-cols-2 gap-4">
          <NutritionRows
            container={data.servingSize.container}
            multiplier={multiplier}
            data={data.nutritions}
          />
        </div>
      </Dialog>
    );
}
