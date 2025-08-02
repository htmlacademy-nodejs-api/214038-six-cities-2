import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { Offer } from '../../types/index.js';
import { ApartmentsType } from '../../types/apartments.type.enum.js';
import { Goods } from '../../types/goods.type.enum.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps implements Offer {
  @prop({ required: true, minlength: [10, 'Min length for title is 10'], maxlength: [100, 'Max length for title is 100'] })
  public title: string;

  @prop({ required: true, minlength: [20, 'Min length for description is 20'], maxlength: [1024, 'Max length for description is 1024'] })
  public description: string;

  @prop({ required: true })
  public publishedDate: Date;

  @prop({ required: true })
  public city: string;

  @prop({ required: true })
  public previewImage: string;

  @prop({ required: true, type: () => [String] })
  public photos: string[];

  @prop({ required: true, default: false })
  public isPremium: boolean;

  @prop({ required: true, default: false })
  public isFavorite: boolean;

  @prop({ required: true, min: [1, 'Min rating is 1'], max: [5, 'Max rating is 5'], default: 0 })
  public rating: number;

  @prop({ required: true, enum: ApartmentsType })
  public type: ApartmentsType;

  @prop({ required: true, min: [1, 'Min bedrooms is 1'], max: [8, 'Max bedrooms is 8'] })
  public bedrooms: number;

  @prop({ required: true, min: [1, 'Min maxAdults is 1'], max: [10, 'Max maxAdults is 10'] })
  public maxAdults: number;

  @prop({ required: true, min: [100, 'Min price is 100'], max: [100000, 'Max price is 100000'] })
  public price: number;

  @prop({ required: true, type: () => [String], enum: Goods })
  public goods: Goods[];

  @prop({ required: true, ref: UserEntity })
  public author: string;

  @prop({ required: true, default: 0 })
  public commentsCount: number;

  @prop({ required: true })
  public latitude: number;

  @prop({ required: true })
  public longitude: number;

  constructor(offerData: Offer) {
    super();

    this.title = offerData.title;
    this.description = offerData.description;
    this.publishedDate = offerData.publishedDate;
    this.city = offerData.city;
    this.previewImage = offerData.previewImage;
    this.photos = offerData.photos;
    this.isPremium = offerData.isPremium;
    this.isFavorite = offerData.isFavorite;
    this.rating = offerData.rating;
    this.type = offerData.type;
    this.bedrooms = offerData.bedrooms;
    this.maxAdults = offerData.maxAdults;
    this.price = offerData.price;
    this.goods = offerData.goods;
    this.author = offerData.author;
    this.commentsCount = offerData.commentsCount;
    this.latitude = offerData.latitude;
    this.longitude = offerData.longitude;
  }
}

export const OfferModel = getModelForClass(OfferEntity);
