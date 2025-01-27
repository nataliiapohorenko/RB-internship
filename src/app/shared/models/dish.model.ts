export interface DishInterface {
  type: 'dish';
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
}
