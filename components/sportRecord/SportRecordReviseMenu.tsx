import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  EllipsisVerticalIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/16/solid';

import { ISportRecord } from '@/types';
import useDeleteSportRecord from '@/feature/sportRecord/useDeleteSportRecord';
import EditSportRecord from './EditSportRecord';

interface Props {
  sportRecord: ISportRecord;
}

export default function SportRecordReviseMenu({ sportRecord }: Props) {
  const { deleteSportRecord } = useDeleteSportRecord();
  const [isEdit, setIsEdit] = useState(false);

  const { id } = sportRecord;

  function handleDeleteSportRecord() {
    deleteSportRecord(id);
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
          <MenuItem>
            <button
              type="button"
              onClick={() => handleDeleteSportRecord()}
              className="group flex w-full items-center gap-3 rounded-lg px-2 py-1.5 data-[focus]:bg-primary-100"
            >
              <TrashIcon className="size-4" />
              刪除
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
      <EditSportRecord
        isEdit={isEdit}
        isClose={() => setIsEdit(false)}
        sportRecord={sportRecord}
      />
    </>
  );
}
