import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/16/solid';

import { IRecord } from '@/types/record';
import useDeleteRecord from '@/feature/record/useDeleteRecord';
import EditRecordForm from './EditRecordForm';

export default function RecordReviseMenu({ record }: { record: IRecord }) {
  const { deleteRecord } = useDeleteRecord();
  const [isEdit, setIsEdit] = useState(false);

  const { id, food } = record;

  function handleDeleteRecord() {
    deleteRecord(id);
  }

  return (
    <>
      <Menu>
        <MenuButton>
          <EllipsisVerticalIcon className="size-5 text-gray-700" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-2 w-[105px] origin-top-right rounded-xl border bg-white p-2 shadow-lg transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {food && (
            <>
              <MenuItem>
                <button
                  type="button"
                  onClick={() => setIsEdit(true)}
                  className="group flex w-full items-center gap-3 rounded-lg px-2 py-1.5 data-[focus]:bg-primary-100"
                >
                  <PencilIcon className="size-4" />
                  編輯
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-primary-200" />
            </>
          )}
          <MenuItem>
            <button
              type="button"
              onClick={() => handleDeleteRecord()}
              className="group flex w-full items-center gap-3 rounded-lg px-2 py-1.5 data-[focus]:bg-primary-100"
            >
              <TrashIcon className="size-4" />
              刪除
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <EditRecordForm
        isEdit={isEdit}
        isClose={() => setIsEdit(false)}
        record={record}
      />
    </>
  );
}
