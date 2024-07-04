'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { type FoodFormType } from '@/schemas/food';
import { editFood as editFoodApi } from '@/api/food';

interface IEditFood {
  food_id: string;
  newFood: FoodFormType;
}

export default function useEditFood() {
  const queryClient = useQueryClient();
  const { mutate: editFood, isPending } = useMutation({
    mutationFn: ({ food_id, newFood }: IEditFood) =>
      editFoodApi({ food_id, newFood }),
    onSuccess: () => {
      toast.success('修改食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['lookups'] });
    },
    onError: () => {
      toast.error('修改食品失敗，請稍後再試');
    }
  });

  return { editFood, isPending };
}
