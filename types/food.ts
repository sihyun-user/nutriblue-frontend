export interface INutritions {
  [key: string]: number;
  calories: number;
  protein: number;
  carbohydrates: number;
  sugar: number;
  fat: number;
  saturated_fat: number;
  trans_fat: number;
  sodium: number;
  potassium: number;
  cholesterol: number;
}

export interface IFood {
  id: string;
  verified: boolean;
  publiced: boolean;
  name: string;
  common_name: string;
  brand_name: string;
  serving_size: {
    value: number;
    unit: string;
    container: number;
  };
  nutritions: INutritions;
  bookmark_collects: string[];
}
