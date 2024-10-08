'use cleint';

import { useQueryClient, useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { type FoodFormType } from '@/schemas/food';
import { editFood as editFoodApi } from '@/api/food';

interface IEditFood {
  foodId: string;
  newFood: FoodFormType;
}

export default function useEditFood() {
  const queryClient = useQueryClient();

  const { mutate: editFood, isPending } = useMutation({
    mutationFn: ({ foodId, newFood }: IEditFood) =>
      editFoodApi({ foodId, newFood }),
    onSuccess: () => {
      toast.success('修改食品成功');
      queryClient.invalidateQueries({ queryKey: ['foods'] });
      queryClient.invalidateQueries({ queryKey: ['lookups'] });
      queryClient.invalidateQueries({ queryKey: ['records'] });
      queryClient.invalidateQueries({ queryKey: ['sportRecords'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
    onError: () => {
      toast.error('修改食品失敗，請稍後再試');
    }
  });

  return { editFood, isPending };
}
