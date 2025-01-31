import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsService } from '../../../services/restaurants.service';
import { FoodItemsService } from '../../../services/food-items.service';
import { RestaurantInterface } from '../../models/restaurant.model';
import { FoodItemInterface } from '../../models/food-item.model';
import { PrimaryCardComponent } from '../primaryCard/primary-card.component';
import { SecondaryCardComponent } from '../secondaryCard/secondary-card.component';
import { CardTypeEnum } from '../../models/card-type.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [PrimaryCardComponent, SecondaryCardComponent, CommonModule],
  templateUrl: './list.component.html',
  standalone: true,
})
export class ListComponent implements OnInit {
  restaurants$!: Observable<RestaurantInterface[]>;
  foodItems$!: Observable<FoodItemInterface[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private foodItemsService: FoodItemsService
  ) {}

  ngOnInit(): void {
    this.restaurants$ = this.restaurantsService.items$;
    this.foodItems$ = this.foodItemsService.items$;

    this.restaurantsService.getItems().subscribe();
    this.foodItemsService.getItems().subscribe();
  }

  toggleFavourite(id: string, type: CardTypeEnum): void {
    switch (type) {
      case CardTypeEnum.Restaurant:
        this.restaurantsService.toggleFavorite(id);
        break;
      case CardTypeEnum.FoodItem:
        this.foodItemsService.toggleFavorite(id);
        break;
    }
  }
}
