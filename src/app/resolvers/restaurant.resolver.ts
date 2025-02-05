import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from '../services/restaurants.service';
import { RestaurantDetailsInterface } from '../shared/models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantResolver implements Resolve<RestaurantDetailsInterface> {
  constructor(private restaurantsService: RestaurantsService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<RestaurantDetailsInterface> {
    const id = route.paramMap.get('id');
    return this.restaurantsService.getItemById(id!);
  }
}
