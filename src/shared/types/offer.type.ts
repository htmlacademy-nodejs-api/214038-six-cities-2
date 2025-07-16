import { User } from './user.type.js';
import { ApartmentsType } from './apartments.type.enum.js';
import { Goods } from './goods.type.enum.js';

export type Offer = {
    title: string;
    description: string;
    publishedDate: Date;
    city: string;
    previewImage: string;
    photos: string[];
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    type: ApartmentsType;
    bedrooms: number;
    maxAdults: number;
    price: number;
    goods: Goods[];
    author: User;
    commentsCount: number;
    latitude: number;
    longitude: number;
}
