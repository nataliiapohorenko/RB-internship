import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodItemResolver } from './resolvers/food-item.resolver';
import { FoodItemDetailsComponent } from './pages/food-item-details/food-item-details.component';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantGuard } from './guards/restaurant.guard';
import { FoodItemGuard } from './guards/food-item.guard';
import { RoutingConstants } from './constants/routes.constants';

export const routes: Routes = [
  { path: '', redirectTo: RoutingConstants.HOME, pathMatch: 'full' },
  { path: RoutingConstants.HOME, component: HomeComponent },
  {
    path: `${RoutingConstants.RESTAURANTS}/:${RoutingConstants.ID}`,
    component: RestaurantDetailsComponent,
    canActivate: [RestaurantGuard],
    resolve: { restaurant: RestaurantResolver },
  },
  {
    path: `${RoutingConstants.FOOD_ITEMS}/:${RoutingConstants.ID}`,
    component: FoodItemDetailsComponent,
    canActivate: [FoodItemGuard],
    resolve: { foodItem: FoodItemResolver },
  },
  { path: '**', redirectTo: RoutingConstants.HOME },
];
