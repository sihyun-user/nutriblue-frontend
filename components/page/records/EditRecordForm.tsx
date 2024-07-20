'use client';

import { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

import { IRecord } from '@/types/record';
import Dialog from '@/components/dialog/Dialog';
import NutritionRows from '@/components/foods/NutritionRows';
import EditRecordRow from './EditRecordRow';

interface Props {
  isEdit: boolean;
  isClose: () => void;
  record: IRecord;
}

export default function EditRecordForm({ isEdit, isClose, record }: Props) {
  const [multiplier, setMultiplier] = useState(2);

  const { food, multiplier: initMultiplier } = record;

  useEffect(() => {
    setMultiplier(initMultiplier);
  }, [initMultiplier]);

  if (food)
    return (
      <Dialog title="食品的營養成分" isOpen={isEdit} onClose={isClose}>
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
              {food.verified && (
                <div className="group flex cursor-pointer items-center gap-1">
                  <CheckCircleIcon className="size-5 text-green-600" />
                  <span className="text-xs font-medium text-green-600 group-hover:text-green-700">
                    了解更多
                  </span>
                </div>
              )}
            </div>
          </div>
          <EditRecordRow
            record={record}
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
