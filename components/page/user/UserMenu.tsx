'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { CameraIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

import { useUserInfo } from '@/providers/UserProvider';
import useUploadImage from '@/feature/user/useUploadImage';
import useUpadteAvatar from '@/feature/user/useUpadteAvatar';
import Avatar from '@/components/ui/Avatar';

const navList = [
  {
    name: '個人資訊',
    url: '/user/profile'
  },
  {
    name: '修改密碼',
    url: '/user/security'
  }
];

export default function UserMenu() {
  const userInfo = useUserInfo();
  const pathname = usePathname();
  const { uploadImage, isUploading } = useUploadImage();
  const { updateAvatar, isUpdating } = useUpadteAvatar();
  const uploadRef = useRef<HTMLInputElement>(null);

  async function handleAvatarUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (uploadRef.current) {
      uploadRef.current.value = '';
    }

    const maxSizeInMB = 5;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

    if (file.size > maxSizeInBytes) {
      toast.error(`檔案大小不能超過 ${maxSizeInMB}MB`);
    }

    uploadImage(file, {
      onSuccess: (data) => {
        const { imgUrl } = data;
        updateAvatar(imgUrl);
      }
    });
  }

  if (userInfo)
    return (
      <>
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            {(isUploading || isUpdating) && (
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="spinner-mini size-6 border-blue-300 border-r-blue-600" />
              </div>
            )}
            <Avatar opacity={isUploading || isUpdating} size={105} />
            <label htmlFor="upload-avatar">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <input
                ref={uploadRef}
                className="hidden"
                type="file"
                accept=".jpg, .png, .gif"
                id="upload-avatar"
                onChange={(e) => handleAvatarUpload(e)}
              />
              <CameraIcon className="absolute bottom-1 right-1 size-7 cursor-pointer rounded-full bg-blue-100 p-1 text-blue-400" />
            </label>
          </div>
          <h4 className="text-xl font-semibold text-blue-400">
            {userInfo.name}
          </h4>
          <h5 className="mb-6 text-blue-400">{userInfo.email}</h5>
        </div>
        <div className="flex flex-col items-center gap-4">
          {navList.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              className={`flex min-h-12 w-full items-center gap-6 rounded px-2.5 font-semibold text-primary-900 transition-colors hover:bg-gray-200 ${pathname === item.url ? 'bg-gray-200' : 'bg-gray-50'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </>
    );
}
