import { IFood } from './food';

export interface IRecord {
  id: string;
  food: IFood;
  multiplier: number;
  meal_name: string;
  record_date: string;
}
