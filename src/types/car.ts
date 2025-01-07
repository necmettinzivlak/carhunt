export interface CarPoints {
  base: number;
  perHint: number;
  perPart: number;
}

export interface CarImages {
  parts: string[];
  full: string;
}

export interface Car {
  id: number;
  brandName: string;
  brandPoints: CarPoints;
  modelName: string;
  modelPoints: CarPoints;
  year: number;
  hints: string[];
  images: CarImages;
  difficulty: number;
} 