import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RestaurantCardInterface } from './shared/interfaces';
import { RatingPipe } from './shared/pipes/rating-pipe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RatingPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  restaurantCards: RestaurantCardInterface[] = [
    {
      id: 1,
      title: 'McDonald`s',
      image: 'assets/images/McDonalds.png',
      categories: ['burger', 'chicken', 'fast food'],
      rating: 4.5,
      reviews: 4,
      isFreeDelivery: true,
      timeZone: 1,
      isFavorite: true,
    },
    {
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
    },
  ];
}
