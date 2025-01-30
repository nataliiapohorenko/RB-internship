import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItemInterface } from '../shared/models/food-item.model';
import { environment } from '../../environments/environment';

interface FoodItemsResponse {
  success: boolean;
  data: FoodItemInterface[];
}

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  private foodItemes: FoodItemInterface[] = [];
  private foodItemUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  getFoodItems(): Observable<FoodItemsResponse> {
    return this.http.get<FoodItemsResponse>(this.foodItemUrl + '/food-items');
  }

  addToFavorites(id: string): void {
    this.foodItemes = this.foodItemes.map(foodItem =>
      foodItem._id === id
        ? { ...foodItem, isFavorite: !foodItem.isFavourite }
        : foodItem
    );
  }
}
