import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface BaseEntity {
  _id: string;
  isFavourite?: boolean;
}

export abstract class BaseService<T extends BaseEntity> {
  protected http = inject(HttpClient);
  protected abstract apiUrl: string;
  protected itemsSubject: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  items$ = this.itemsSubject.asObservable();

  getItems(): Observable<T[]> {
    return this.http
      .get<T[]>(this.apiUrl)
      .pipe(tap(items => this.itemsSubject.next(items)));
  }

  toggleFavorite(id: string): void {
    const updatedItems = this.itemsSubject.value.map(item =>
      item._id === id ? { ...item, isFavourite: !item.isFavourite } : item
    );

    this.itemsSubject.next([...updatedItems]);
  }
}
