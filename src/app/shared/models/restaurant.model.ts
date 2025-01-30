import { CardTypeEnum } from './card-type.enum';

export interface RestaurantInterface {
  type: CardTypeEnum.Restaurant;
  _id: string;
  name: string;
  imgUrl: string;
  categories: string[];
  delivery: {
    cost: number;
    time: number;
  };
  rating: number;
  feedbacks: number;
  isFavourite: boolean;
  verified: boolean;
}
