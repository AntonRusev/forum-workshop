import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
        subscribers: string[];
        posts: string[];
        _id: string;
        themeName: string;
        userId: IUser;
        themeId: ITheme
        created_at: string;
        updatedAt: string;
        __v: number;
      
}