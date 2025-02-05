import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestaurantDetailsInterface } from '../../shared/models/restaurant.model';
import { PrimaryCardComponent } from '../../shared/components/primaryCard/primary-card.component';
import { SecondaryCardComponent } from '../../shared/components/secondaryCard/secondary-card.component';
import { RatingConverter } from '../../shared/pipes/rating-pipe.pipe';
import { RestaurantsService } from '../../services/restaurants.service';
import { FoodItemsService } from '../../services/food-items.service';
import { CardTypeEnum } from '../../shared/models/card-type.enum';
import { FoodItemInterface } from '../../shared/models/food-item.model';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [
    CommonModule,
    PrimaryCardComponent,
    SecondaryCardComponent,
    RatingConverter,
  ],
  templateUrl: './restaurant-details.component.html',
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: RestaurantDetailsInterface;
  sortedFoodItems: FoodItemInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantsService: RestaurantsService,
    private foodItemsService: FoodItemsService
  ) {
    this.restaurant = this.route.snapshot.data['restaurant'];
  }

  ngOnInit() {
    this.sortAndLimitFoodItems();
  }

  sortAndLimitFoodItems() {
    this.sortedFoodItems = [...this.restaurant.foodItems]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
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
