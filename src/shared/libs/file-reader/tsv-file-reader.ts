import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, ApartmentsType, Goods, User } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .slice(1) // Пропускаем заголовок
      .map((line) => line.split('\t'))
      .map(([title, description, publishedDate, city, previewImage, photos, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, author, commentsCount, latitude, longitude]) => ({
        title,
        description,
        publishedDate: new Date(publishedDate),
        city,
        previewImage,
        photos: photos.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseFloat(rating),
        type: ApartmentsType[type as 'apartment' | 'room' | 'house' | 'hotel'],
        bedrooms: Number.parseInt(bedrooms, 10),
        maxAdults: Number.parseInt(maxAdults, 10),
        price: Number.parseInt(price, 10),
        goods: goods.split(';') as Goods[],
        author: {
          name: author,
          email: author,
          avatar: author,
          password: '',
          isPro: false,
        } as unknown as User,
        commentsCount: Number.parseInt(commentsCount, 10),
        latitude: Number.parseFloat(latitude),
        longitude: Number.parseFloat(longitude),
      }));
  }
}
