import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantInterface } from '../../models/restaurant.model';
import { FoodItemInterface } from '../../models/food-item.model';
import { RatingConverter } from '../../pipes/rating-pipe.pipe';
import { CardTypeEnum } from '../../models/card-type.enum';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  standalone: true,
  imports: [CommonModule, RatingConverter],
})
export class SecondaryCardComponent {
  @Input() data!: RestaurantInterface | FoodItemInterface;
  @Output() favoriteToggled = new EventEmitter<{
    id: string;
    type: CardTypeEnum;
  }>();
  CardTypeEnum = CardTypeEnum;

  get restaurantData(): RestaurantInterface {
    return this.data as RestaurantInterface;
  }
  get foodItemData(): FoodItemInterface {
    return this.data as FoodItemInterface;
  }

  toggleFavorite(): void {
    this.favoriteToggled.emit({ id: this.data.id, type: this.data.type });
  }
}
