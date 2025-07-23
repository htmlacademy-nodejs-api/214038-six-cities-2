import { Offer, ApartmentsType, Goods, User } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    publishedDate,
    city,
    previewImage,
    photos,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    commentsCount,
    latitude,
    longitude,
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    publishedDate: new Date(publishedDate),
    city,
    previewImage,
    photos: photos.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number.parseFloat(rating),
    type: ApartmentsType[type as keyof typeof ApartmentsType],
    bedrooms: Number.parseInt(bedrooms, 10),
    maxAdults: Number.parseInt(maxAdults, 10),
    price: Number.parseInt(price, 10),
    goods: goods.split(';') as Goods[],
    author: host as unknown as User,
    commentsCount: Number.parseInt(commentsCount, 10),
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude),
  };
}
