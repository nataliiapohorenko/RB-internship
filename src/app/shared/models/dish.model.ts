import { CardTypeEnum } from './card-type.enum';

export interface DishInterface {
  type: CardTypeEnum.Dish;
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  reviews: number;
  isFavorite: boolean;
}
