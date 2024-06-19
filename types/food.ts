interface INutritions {
  [key: string]: number;
  calories: number;
  protein: number;
  fat: number;
  saturated_fat: number;
  carbohydrates: number;
  fiber: number;
  sugar: number;
  sodium: number;
  potassium: number;
  calcium: number;
  iron: number;
}

export interface IFood {
  id: string;
  publiced: boolean;
  verified: boolean;
  name: string;
  common_name: string;
  brand_name: string;
  serving_size: {
    nutrition_multiplier: number;
    unit: string;
    value: number;
  };
  nutritions: INutritions;
}
