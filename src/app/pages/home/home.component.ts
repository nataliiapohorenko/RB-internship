import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantsService } from '../../services/restaurants.service';
import { FoodItemsService } from '../../services/food-items.service';
import { RestaurantInterface } from '../../shared/models/restaurant.model';
import { FoodItemInterface } from '../../shared/models/food-item.model';
import { PrimaryCardComponent } from '../../shared/components/primaryCard/primary-card.component';
import { SecondaryCardComponent } from '../../shared/components/secondaryCard/secondary-card.component';
import { CardTypeEnum } from '../../shared/models/card-type.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [PrimaryCardComponent, SecondaryCardComponent, CommonModule],
  standalone: true,
})
export class HomeComponent implements OnInit {
  restaurants$!: Observable<RestaurantInterface[]>;
  foodItems$!: Observable<FoodItemInterface[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private foodItemsService: FoodItemsService,
    private router: Router
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

  goToDetails(id: string, type: CardTypeEnum): void {
    switch (type) {
      case CardTypeEnum.Restaurant:
        this.router.navigate(['/restaurants', id]);
        break;
      case CardTypeEnum.FoodItem:
        this.router.navigate(['/food-items', id]);
        break;
    }
  }
}
