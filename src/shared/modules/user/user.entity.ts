import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { User } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({ unique: true, required: true })
  public email: string;

  @prop({ default: 'default-avatar.png', validate: { validator: (v: string) => /\.(jpg|jpeg|png)$/i.test(v), message: 'Avatar must be in jpg or png format' } })
  public avatar: string;

  @prop({ required: true, minlength: [1, 'Min length for firstname is 1'], maxlength: [15, 'Max length for firstname is 15'], default: '' })
  public name: string;

  @prop({ required: true, default: '' })
  private password?: string;

  @prop({ required: true, default: false })
  public isPro: boolean;

  constructor(userData: User) {
    super();

    this.email = userData.email;
    this.avatar = userData.avatar;
    this.name = userData.name;
    this.isPro = userData.isPro;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public getPassword() {
    return this.password;
  }
}

export const UserModel = getModelForClass(UserEntity);
