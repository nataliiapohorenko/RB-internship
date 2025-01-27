import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantInterface } from '../../models/restaurant.model';
import { DishInterface } from '../../models/dish.model';
import { RatingConverter } from '../../pipes/rating-pipe.pipe';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondaryCard.component.html',
  styleUrls: ['./secondaryCard.component.scss'],
  standalone: true,
  imports: [CommonModule, RatingConverter],
})
export class SecondaryCardComponent {
  @Input() data!: RestaurantInterface | DishInterface;

  isRestaurant(
    data: RestaurantInterface | DishInterface
  ): data is RestaurantInterface {
    return data.type === 'restaurant';
  }
}
