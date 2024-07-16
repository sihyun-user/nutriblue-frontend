import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline';

import { type UserInfoType } from '@/types/user';
import { IFood } from '@/types/food';
import { useUserInfo } from '@/providers/UserProvider';
import { setContainerValue } from '@/utils';
import useCreateFoodBookmark from '@/feature/bookmark/useCreateBookmark';
import useDeleteFoodBookmark from '@/feature/bookmark/useDeleteBookmark';
import ReviseMenu from './ReviseMenu';

interface Props {
  food: IFood;
  selectMenu?: boolean;
  isPubliced?: boolean;
  onFoodClick: () => void;
}

export default function FoodCard({
  food,
  selectMenu = false,
  isPubliced = false,
  onFoodClick
}: Props) {
  const { id: userId } = useUserInfo() as UserInfoType;
  const { createBookmark } = useCreateFoodBookmark();
  const { deleteBookmark } = useDeleteFoodBookmark();

  const {
    id: foodId,
    name,
    verified,
    publiced,
    servingSize: { value, container, unit },
    nutritions: { calories, protein, carbohydrates, sugar, fat, sodium },
    bookmarkCollects
  } = food;

  function handleBookmark(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    if (bookmarkCollects.includes(userId)) {
      deleteBookmark({ foodId });
    } else {
      createBookmark({ foodId });
    }
  }

  return (
    <div
      onClick={onFoodClick}
      className="relative cursor-pointer overflow-hidden rounded-lg border-2 border-white bg-white p-4 shadow-md hover:shadow-lg"
    >
      <div className="mb-3 flex w-10/12 items-center gap-3">
        <h3 className="line-clamp-1 text-xl font-bold">{name}</h3>
        {verified && (
          <CheckCircleIcon className="size-6 min-w-6 text-green-600" />
        )}
      </div>
      {isPubliced &&
        (publiced ? (
          <div className="mb-1 inline-flex rounded bg-green-600 p-1 text-xs text-white">
            已公開
          </div>
        ) : (
          <div className="mb-1 inline-flex rounded bg-primary-400 p-1 text-xs text-white">
            不公開
          </div>
        ))}
      {selectMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100"
        >
          <ReviseMenu food={food} />
        </div>
      )}
      {!selectMenu && (
        <div
          onClick={(e) => handleBookmark(e)}
          className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100"
        >
          {bookmarkCollects.includes(userId) ? (
            <BookmarkIcon className="size-7 text-cyan-500" />
          ) : (
            <OutlineBookmarkIcon className="size-7 text-cyan-500" />
          )}
        </div>
      )}
      <div className="mb-2 flex items-center gap-2">
        <div className="text-blue-400">
          <span className="text-xl font-bold">
            {setContainerValue(calories, container)}
          </span>{' '}
          kcal
        </div>
        <div className="text-sm">/</div>
        <div className="text-sm">
          {setContainerValue(value, container)}
          {unit}
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        <li className="flex gap-2">
          碳水化合物<span>{setContainerValue(carbohydrates, container)}g</span>
        </li>
        <li className="flex gap-2">
          蛋白質 <span>{setContainerValue(protein, container)}g</span>
        </li>
        <li className="flex gap-2">
          脂肪 <span>{setContainerValue(fat, container)}g</span>
        </li>
        <li className="flex gap-2">
          糖 <span>{setContainerValue(sugar, container)}g</span>
        </li>
        <li className="flex gap-2">
          納 <span>{setContainerValue(sodium, container)}g</span>
        </li>
      </ul>
    </div>
  );
}
