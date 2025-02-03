// restaurant.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RestaurantsService } from '../services/restaurants.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestaurantGuard implements CanActivate {
  constructor(
    private restaurantsService: RestaurantsService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const id = route.paramMap.get('id');
    if (!id) {
      return of(this.router.createUrlTree(['/home']));
    }
    return this.restaurantsService.getItems().pipe(
      map(restaurants => {
        const restaurantExists = restaurants.some(
          restaurant => restaurant._id === id
        );
        if (restaurantExists) {
          return true;
        } else {
          return this.router.createUrlTree(['/home']);
        }
      }),
      catchError(() => {
        return of(this.router.createUrlTree(['/home']));
      })
    );
  }
}
