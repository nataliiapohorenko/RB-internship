import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantInterface } from '../../models/restaurant.model';
import { DishInterface } from '../../models/dish.model';
import { RatingConverter } from '../../pipes/rating-pipe.pipe';
import { CardTypeEnum } from '../../models/card-type.enum';

@Component({
  selector: 'app-card',
  templateUrl: './primary-card.component.html',
  standalone: true,
  imports: [CommonModule, RatingConverter],
})
export class PrimaryCardComponent {
  @Input() data!: RestaurantInterface | DishInterface;
  CardTypeEnum = CardTypeEnum;
  get restaurantData(): RestaurantInterface {
    return this.data as RestaurantInterface;
  }
  get dishData(): DishInterface {
    return this.data as DishInterface;
  }
}
