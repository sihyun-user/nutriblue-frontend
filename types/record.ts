import { IFood } from './food';

export interface IRecord {
  id: string;
  food: IFood;
  multiplier: number;
  mealName: string;
  recordDate: string;
}
