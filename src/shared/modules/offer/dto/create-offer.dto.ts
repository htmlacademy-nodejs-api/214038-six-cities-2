import { ApartmentsType } from '../../../types/apartments.type.enum.js';
import { Goods } from '../../../types/goods.type.enum.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public publishedDate: Date;
  public city: string;
  public previewImage: string;
  public photos: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: ApartmentsType;
  public bedrooms: number;
  public maxAdults: number;
  public price: number;
  public goods: Goods[];
  public author: string; // User ID
  public commentsCount: number;
  public latitude: number;
  public longitude: number;
}
