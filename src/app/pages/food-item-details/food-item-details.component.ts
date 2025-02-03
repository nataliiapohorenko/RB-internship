import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodItemInterface } from '../../shared/models/food-item.model';

@Component({
  selector: 'app-food-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-item-details.component.html',
})
export class FoodItemDetailsComponent {
  foodItem: FoodItemInterface;

  constructor(private route: ActivatedRoute) {
    this.foodItem = this.route.snapshot.data['foodItem'];
  }
}
