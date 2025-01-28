import { Injectable } from '@angular/core';
import { DishInterface } from '../shared/models/dish.model';
import { CardTypeEnum } from '../shared/models/card-type.enum';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  private dishes: DishInterface[] = [
    {
      type: CardTypeEnum.Dish,
      id: 1,
      title: 'Bacon Burger',
      image: 'assets/images/dish1.png',
      price: 8.9,
      description: 'A classic fast food burger with bacon.',
      rating: 4.8,
      reviews: 10,
      isFavorite: true,
    },
    {
      type: CardTypeEnum.Dish,
      id: 2,
      title: 'Spaghetti Carbonara',
      image: 'assets/images/dish2.png',
      price: 12.9,
      description: 'A classic pasta dish with tomatoes, basil, and garlic.',
      rating: 4.9,
      reviews: 80,
      isFavorite: false,
    },
  ];

  getDishes(): DishInterface[] {
    return this.dishes;
  }

  addToFavorites(id: number): void {
    const dish = this.dishes.find(d => d.id === id);
    if (dish) {
      dish.isFavorite = !dish.isFavorite;
    }
  }
}
