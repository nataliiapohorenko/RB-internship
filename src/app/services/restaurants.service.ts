import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantInterface } from '../shared/models/restaurant.model';
import { environment } from '../../environments/environment';

interface RestaurantsResponse {
  success: boolean;
  data: RestaurantInterface[];
}

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  private restaurants: RestaurantInterface[] = [];
  private restaurnantUrl = `${environment.apiUrl}/restaurants`;

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<RestaurantsResponse> {
    return this.http.get<RestaurantsResponse>(
      this.restaurnantUrl + '/restaurants'
    );
  }

  addToFavorites(id: string): void {
    this.restaurants = this.restaurants.map(restaurant =>
      restaurant._id === id
        ? { ...restaurant, isFavourite: !restaurant.isFavourite }
        : restaurant
    );
  }
}
