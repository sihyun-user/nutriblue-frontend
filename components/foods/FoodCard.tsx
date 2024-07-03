import { BookmarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon as OutlineBookmarkIcon } from '@heroicons/react/24/outline';

import { type UserInfoType } from '@/types/user';
import { IFood } from '@/types/food';
import { useUserInfo } from '@/providers/UserProvider';
import useCreateFoodBookmark from '@/feature/bookmark/useCreateBookmark';
import useDeleteFoodBookmark from '@/feature/bookmark/useDeleteBookmark';
import SelectMenu from './SelectMenu';

interface Props {
  food: IFood;
  selectMenu?: boolean;
  onFoodClick: () => void;
}

export default function FoodCard({
  food,
  selectMenu = false,
  onFoodClick
}: Props) {
  const { id: userId } = useUserInfo() as UserInfoType;
  const { createBookmark } = useCreateFoodBookmark();
  const { deleteBookmark } = useDeleteFoodBookmark();

  const {
    id: food_id,
    name,
    verified,
    serving_size,
    nutritions,
    bookmark_collects
  } = food;

  function handleBookmark(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();

    if (bookmark_collects.includes(userId)) {
      deleteBookmark({ food_id });
    } else {
      createBookmark({ food_id });
    }
  }

  function handleEdit(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }

  return (
    <div
      onClick={onFoodClick}
      className="relative cursor-pointer overflow-hidden rounded-lg border-2 border-white bg-white p-4 shadow-md hover:shadow-lg"
    >
      <div className="mb-4 flex w-10/12 items-center gap-3">
        <h3 className="line-clamp-1 text-xl font-bold">{name}</h3>
        {verified && (
          <CheckCircleIcon className="size-6 min-w-6 text-green-600" />
        )}
      </div>
      {selectMenu && (
        <div
          onClick={(e) => handleEdit(e)}
          className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100"
        >
          {/* <EllipsisVerticalIcon className="size-7 text-cyan-500" /> */}
          <SelectMenu />
        </div>
      )}
      {!selectMenu && (
        <div
          onClick={(e) => handleBookmark(e)}
          className="absolute right-2 top-2 flex size-10 items-center justify-center rounded-xl hover:bg-cyan-100"
        >
          {bookmark_collects.includes(userId) ? (
            <BookmarkIcon className="size-7 text-cyan-500" />
          ) : (
            <OutlineBookmarkIcon className="size-7 text-cyan-500" />
          )}
        </div>
      )}
      <div className="mb-2 flex items-center gap-2">
        <div className="text-blue-400">
          <span className="text-xl font-bold">{nutritions.calories}</span> kcal
        </div>
        <div className="text-sm">/</div>
        <div className="text-sm">
          {serving_size.value * serving_size.container}
          {serving_size.unit}
        </div>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        <li className="flex gap-2">
          碳水化合物<span>{nutritions.carbohydrates}g</span>
        </li>
        <li className="flex gap-2">
          蛋白質 <span>{nutritions.protein}g</span>
        </li>
        <li className="flex gap-2">
          脂肪 <span>{nutritions.protein}g</span>
        </li>
        <li className="flex gap-2">
          糖 <span>{nutritions.sugar}g</span>
        </li>
        <li className="flex gap-2">
          納 <span>{nutritions.sodium}g</span>
        </li>
      </ul>
    </div>
  );
}
