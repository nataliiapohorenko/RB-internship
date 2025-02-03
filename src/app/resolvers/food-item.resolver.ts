import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodItemsService } from '../services/food-items.service';
import { FoodItemInterface } from '../shared/models/food-item.model';

@Injectable({
  providedIn: 'root',
})
export class FoodItemResolver implements Resolve<FoodItemInterface> {
  constructor(private foodItemService: FoodItemsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<FoodItemInterface> {
    const id = route.paramMap.get('id');
    return this.foodItemService.getItemById(id!);
  }
}
