import { CardTypeEnum } from './card-type.enum';
import { FoodItemInterface } from './food-item.model';

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

export interface RestaurantDetailsInterface extends RestaurantInterface {
  foodItems: FoodItemInterface[];
}

export interface RestaurantDetailsResponseInterface {
  restaurant: RestaurantInterface;
  foodItems: FoodItemInterface[];
}
