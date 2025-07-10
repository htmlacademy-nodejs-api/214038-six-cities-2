import { User } from "./user.type.ts";

export type Comment = {
    text: string;
    date: Date;
    rating: number;
    author: User;
}