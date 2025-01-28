import { Injectable } from '@angular/core';
import { RestaurantInterface } from '../shared/models/restaurant.model';
import { CardTypeEnum } from '../shared/models/card-type.enum';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private restaurants: RestaurantInterface[] = [
    {
      type: CardTypeEnum.Restaurant,
      id: 1,
      title: 'McDonald`s',
      image: 'assets/images/McDonalds.png',
      categories: ['burger', 'chicken', 'fast food'],
      rating: 4.5,
      reviews: 4,
      isFreeDelivery: true,
      timeZone: 1,
      isFavorite: true,
      isChecked: true,
    },
    {
      type: CardTypeEnum.Restaurant,
      id: 2,
      title: 'Pizza Hut',
      image: 'assets/images/PizzaHut.png',
      categories: ['pizza', 'italian'],
      rating: 4.7,
      reviews: 30,
      isFreeDelivery: false,
      deliveryPrice: 5.9,
      timeZone: 2,
      isFavorite: false,
      isChecked: false,
    },
  ];

  getRestaurants(): RestaurantInterface[] {
    return this.restaurants;
  }

  addToFavorites(id: number): void {
    const restaurant = this.restaurants.find(r => r.id === id);
    if (restaurant) {
      restaurant.isFavorite = !restaurant.isFavorite;
    }
  }
}
