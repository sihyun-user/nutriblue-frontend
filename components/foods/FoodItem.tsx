'use client';

import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

import { IFood } from '@/types';
import Dialog from '@/components/dialog/Dialog';
import BaseButton from '@/components/ui/BaseButton';
import VerifyFood from '@/components/ui/VerifyFood';
import RecordRow from './RecordRow';
import NutritionRows from './NutritionRows';

interface Props {
  isSelect: boolean;
  isClose: () => void;
  food: IFood | null;
}

export default function FoodItem({ isSelect, isClose, food }: Props) {
  const [newRecord, setNewRecord] = useState(false);
  const [multiplier, setMultiplier] = useState(1);

  useEffect(() => {
    setNewRecord(false);
  }, [isSelect]);

  if (food)
    return (
      <Dialog title="食品的營養成分" isOpen={isSelect} onClose={isClose}>
        <div className="mb-6 rounded-lg bg-blue-100 p-4">
          <div className="flex min-h-[40px] justify-between">
            <div className="w-8/12 space-y-3">
              <div>
                <h1 className="text-xl font-semibold text-primary-800">
                  {food.name}
                </h1>
                {food.brandName && (
                  <span className="mt-1 text-sm font-medium">
                    ({food.brandName})
                  </span>
                )}
              </div>
              {food.verified && <VerifyFood />}
            </div>
            {!newRecord && (
              <BaseButton onClick={() => setNewRecord(true)}>
                <PlusIcon className="size-5" />
                新增紀錄
              </BaseButton>
            )}
          </div>
          <RecordRow
            food={food}
            record={newRecord}
            closeRecord={() => setNewRecord(false)}
            handleClose={isClose}
            handleMultiplier={(value) => setMultiplier(value)}
          />
        </div>
        <h6 className="mb-3 text-lg font-semibold">營養成分</h6>
        <div className="grid grid-cols-2 gap-4">
          <NutritionRows
            container={food.servingSize.container}
            multiplier={multiplier}
            data={food.nutritions}
          />
        </div>
      </Dialog>
    );
}
