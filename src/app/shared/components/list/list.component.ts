import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from '../../../services/restaurants.service';
import { FoodItemsService } from '../../../services/food-items.service';
import { RestaurantInterface } from '../../models/restaurant.model';
import { FoodItemInterface } from '../../models/food-item.model';
import { PrimaryCardComponent } from '../primaryCard/primary-card.component';
import { CardTypeEnum } from '../../models/card-type.enum';

@Component({
  selector: 'app-list',
  imports: [PrimaryCardComponent, CommonModule],
  templateUrl: './list.component.html',
  standalone: true,
})
export class ListComponent implements OnInit {
  restaurants: RestaurantInterface[] = [];
  foodItems: FoodItemInterface[] = [];

  constructor(
    private restaurantsService: RestaurantsService,
    private foodItemsService: FoodItemsService
  ) {}

  ngOnInit(): void {
    this.restaurantsService.getRestaurants().subscribe({
      next: response => {
        this.restaurants = response.data.map(restaurant => ({
          ...restaurant,
          type: CardTypeEnum.Restaurant,
        }));
      },
      error: err => {
        console.error('Error fetching restaurants:', err);
      },
    });

    this.foodItemsService.getFoodItems().subscribe({
      next: response => {
        this.foodItems = response.data.map(foodItem => ({
          ...foodItem,
          type: CardTypeEnum.FoodItem,
        }));
      },
      error: err => {
        console.error('Error fetching food items:', err);
      },
    });
  }

  toggleFavorite(id: string, type: CardTypeEnum): void {
    console.log(type, id);
    switch (type) {
      case CardTypeEnum.Restaurant:
        this.restaurantsService.addToFavorites(id);
        break;
      case CardTypeEnum.FoodItem:
        this.foodItemsService.addToFavorites(id);
        break;
    }
  }
}
