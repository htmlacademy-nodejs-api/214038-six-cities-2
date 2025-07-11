import { User } from './user.type.js';

export type Comment = {
    text: string;
    date: Date;
    rating: number;
    author: User;
}
