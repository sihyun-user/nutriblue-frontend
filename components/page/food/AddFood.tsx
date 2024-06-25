import Dialog from '@/components/dialog/Dialog';
import { Input } from '@headlessui/react';

import { IFood } from '@/types/food';
import FormRow from '@/components/ui/FormRow';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: IFood | null;
}

export default function AddFood({ isOpen, onClose, data }: Props) {
  if (data)
    return (
      <Dialog title={data.name} isOpen={isOpen} onClose={onClose}>
        <div className="bg-primary-100">
          <FormRow label="份數:">
            <Input
              // className={inputStyle}
              type="text"
              id="name"
              placeholder="名稱"
              value={1}
              disabled
            />
          </FormRow>
        </div>
      </Dialog>
    );
}
