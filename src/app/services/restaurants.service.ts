import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RestaurantInterface } from '../shared/models/restaurant.model';
import { environment } from '../../environments/environment';
import { CardTypeEnum } from '../shared/models/card-type.enum';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService extends BaseService<RestaurantInterface> {
  protected apiUrl = `${environment.apiUrl}/restaurants`;

  override getItems(): Observable<RestaurantInterface[]> {
    return super.getItems().pipe(
      map(response =>
        response.map(
          restaurant =>
            ({
              ...restaurant,
              type: CardTypeEnum.Restaurant,
            }) as RestaurantInterface
        )
      ),
      tap(restaurants => this.itemsSubject.next(restaurants))
    );
  }
}
