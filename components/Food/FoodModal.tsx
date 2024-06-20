'use client';

import { useState } from 'react';
import { Field, Label, Input, Radio, RadioGroup } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

import BaseButton from '../BaseButton';
import Modal from '../Modal';

const inputTextStyle = clsx(
  'mt-3 block w-full rounded-lg border border-primary-200 bg-white px-3 py-2.5 text-sm text-primary-800',
  'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-200'
);

const plans = ['g', 'ml'];

export default function FoodModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(plans[0]);

  return (
    <>
      <BaseButton onClick={() => setIsOpen(true)}>
        <PlusIcon className="size-5" />
        新增食品
      </BaseButton>
      <Modal title="建立食品" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-wrap justify-between gap-4">
          <Field className="w-[48%]">
            <Label>食品名稱</Label>
            <Input className={inputTextStyle} />
          </Field>
          <Field className="w-[48%]">
            <Label>其他名稱</Label>
            <Input className={inputTextStyle} />
          </Field>
          <Field className="w-[48%]">
            <Label>品牌名稱</Label>
            <Input className={inputTextStyle} />
          </Field>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <Field className="w-[48%]">
            <Label>每一份量含</Label>
            <Input className={inputTextStyle} />
          </Field>
          <Field className="w-[48%]">
            <Label>單位</Label>
            <RadioGroup
              value={selected}
              onChange={setSelected}
              aria-label="server_size"
              className="mt-3 flex items-center gap-4"
            >
              {plans.map((plan) => (
                <Field key={plan}>
                  <Radio
                    value={plan}
                    className={clsx(
                      'flex size-[40px] cursor-pointer items-center justify-center rounded-lg border border-primary-200 bg-primary-200 text-sm font-medium text-primary-800',
                      'data-[checked]:bg-blue-400 data-[checked]:text-white'
                    )}
                  >
                    {plan}
                  </Radio>
                </Field>
              ))}
            </RadioGroup>
          </Field>
        </div>
        <div>
          <h6 className="mb-2 text-lg font-semibold">營養成分</h6>
          <div className="flex flex-wrap justify-between gap-4">
            <Field className="w-[48%]">
              <Label>熱量</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  kcal
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>蛋白質</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>碳水化合物</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>脂肪</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>飽和脂肪</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>反式脂肪</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>糖</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>納</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>鉀</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>鈣</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>鐵</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>膽固醇</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
            <Field className="w-[48%]">
              <Label>纖維</Label>
              <div className="relative">
                <Input className={inputTextStyle} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2">
                  g
                </span>
              </div>
            </Field>
          </div>
        </div>
      </Modal>
    </>
  );
}
