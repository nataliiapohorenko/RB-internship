import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe',
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 25) {
      return value.toString();
    }
    return Math.floor(value / 25) * 25 + '+';
  }
}
