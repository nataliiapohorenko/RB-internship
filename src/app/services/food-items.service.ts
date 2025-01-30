import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FoodItemInterface } from '../shared/models/food-item.model';
import { environment } from '../../environments/environment';
import { CardTypeEnum } from '../shared/models/card-type.enum';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService extends BaseService<FoodItemInterface> {
  constructor(http: HttpClient) {
    super(http, `${environment.apiUrl}/restaurants/food-items`);
  }

  override getItems(): Observable<FoodItemInterface[]> {
    return super.getItems().pipe(
      map(response =>
        response
          .map(
            foodItem =>
              ({
                ...foodItem,
                type: CardTypeEnum.FoodItem,
              }) as FoodItemInterface
          )
          .sort((a, b) => a.price - b.price)
      ),
      tap(foodItems => this.itemsSubject.next(foodItems))
    );
  }

  override toggleFavorite(id: string): void {
    super.toggleFavorite(id);
  }
}
