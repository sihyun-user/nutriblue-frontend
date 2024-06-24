interface INutritions {
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
  calcium: number;
  iron: number;
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
    nutrition_multiplier: number;
    unit: string;
    value: number;
  };
  nutritions: INutritions;
}

export interface IFoodForm {
  publiced: boolean;
  name: string;
  common_name: string;
  brand_name: string;
  serving_size: {
    nutrition_multiplier?: number;
    unit: string;
    value: number;
  };
  nutritions: INutritions;
}
