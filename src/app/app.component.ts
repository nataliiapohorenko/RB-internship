import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RestaurantInterface } from './shared/models/restaurant.model';
import { RestaurantsService } from './services/restaurants.service';
import { DishesService } from './services/dishes.service';
import { DishInterface } from './shared/models/dish.model';
import { PrimaryCardComponent } from './shared/components/primaryCard/primary-card.component';
import { SecondaryCardComponent } from './shared/components/secondaryCard/secondary-card.component';
import { CardTypeEnum } from './shared/models/card-type.enum';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    PrimaryCardComponent,
    SecondaryCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  cards: (RestaurantInterface | DishInterface)[] = [];
  constructor(
    private restaurantsService: RestaurantsService,
    private dishesService: DishesService
  ) {}

  ngOnInit(): void {
    const restaurants = this.restaurantsService.getRestaurants();
    const dishes = this.dishesService.getDishes();
    this.cards = [...restaurants, ...dishes];
  }

  toggleFavorite(id: number, type: CardTypeEnum): void {
    switch (type) {
      case CardTypeEnum.Restaurant:
        this.restaurantsService.addToFavorites(id);
        break;
      case CardTypeEnum.Dish:
        this.dishesService.addToFavorites(id);
        break;
    }
  }
}
