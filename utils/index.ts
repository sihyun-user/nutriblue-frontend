import { format } from 'date-fns';

export const setContainerValue = (value: number, conatiner: number): number =>
  Math.round(value * conatiner * 10) / 10;

export const formatedDate = (value: Date): string =>
  format(value, 'yyyy-MM-dd');
