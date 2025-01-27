import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RestaurantInterface } from './shared/models/restaurant.model';
import { DishInterface } from './shared/models/dish.model';
import { PrimaryCardComponent } from './shared/components/primaryCard/primaryCard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, PrimaryCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  cards: (RestaurantInterface | DishInterface)[] = [
    {
      type: 'restaurant',
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
      type: 'restaurant',
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
    {
      type: 'dish',
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
      type: 'dish',
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
}
