import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantInterface } from '../../models/restaurant.model';
import { DishInterface } from '../../models/dish.model';
import { RatingConverter } from '../../pipes/rating-pipe.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './primaryCard.component.html',
  styleUrls: ['./primaryCard.component.scss'],
  standalone: true,
  imports: [CommonModule, RatingConverter],
})
export class PrimaryCardComponent {
  @Input() data!: RestaurantInterface | DishInterface;

  isRestaurant(
    data: RestaurantInterface | DishInterface
  ): data is RestaurantInterface {
    return data.type === 'restaurant';
  }
}
