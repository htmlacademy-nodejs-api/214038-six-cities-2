import { User } from "./user.type.ts";
import { ApartmentsType } from "./apartments.type.enum.ts";
import { Goods } from "./goods.type.enum.ts";

export type Offer = {
    name: string;
    description: string;
    date: Date;
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
