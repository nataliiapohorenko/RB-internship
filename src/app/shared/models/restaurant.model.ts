export interface RestaurantInterface {
  type: 'restaurant';
  id: number;
  title: string;
  image: string;
  categories: string[];
  rating: number;
  reviews: number;
  isFreeDelivery: boolean;
  deliveryPrice?: number;
  timeZone: number;
  isFavorite: boolean;
  isChecked: boolean;
}
