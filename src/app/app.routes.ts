import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodItemResolver } from './resolvers/food-item.resolver';
import { FoodItemDetailsComponent } from './pages/food-item-details/food-item-details.component';
import { RestaurantResolver } from './resolvers/restaurant.resolver';
import { RestaurantDetailsComponent } from './pages/restaurant-details/restaurant-details.component';
import { RestaurantGuard } from './guards/restaurant.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailsComponent,
    canActivate: [RestaurantGuard],
    resolve: { restaurant: RestaurantResolver },
  },
  {
    path: 'food-items/:id',
    component: FoodItemDetailsComponent,
    resolve: { foodItem: FoodItemResolver },
  },
  { path: '**', redirectTo: 'home' },
];
