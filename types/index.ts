export interface INutritions {
  [key: string]: number;
  calories: number;
  protein: number;
  carbohydrates: number;
  sugar: number;
  fat: number;
  saturatedFat: number;
  transFat: number;
  sodium: number;
  potassium: number;
  cholesterol: number;
}

export interface IFood {
  id: string;
  verified: boolean;
  publiced: boolean;
  name: string;
  brandName: string;
  servingSize: {
    value: number;
    unit: string;
    container: number;
  };
  nutritions: INutritions;
  bookmarkCollects: string[];
}

export interface IPagination {
  elements: [];
  firstPage: boolean;
  lastPage: boolean;
  empty: boolean;
  elementCount: number;
  totalPages: number;
  targetPage: number;
}

export interface ISportRecord {
  id: string;
  sportName: string;
  sportTime: string;
  sportValue: number;
  recordDate: string;
}

export interface IRecord {
  id: string;
  food: IFood;
  multiplier: number;
  mealName: string;
  recordDate: string;
}

export type UserInfoType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  gender: number;
  birthday: string;
  height: number;
  weight: number;
  sportLevel: string;
  fitnessLevel: string;
  foodCollects: string[];
};
