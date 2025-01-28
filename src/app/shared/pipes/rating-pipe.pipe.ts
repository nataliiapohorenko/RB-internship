import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RatingConverter',
  standalone: true,
})
export class RatingConverter implements PipeTransform {
  transform(value: number): string {
    if (value < 25) {
      return value.toString();
    }
    return Math.floor(value / 25) * 25 + '+';
  }
}
