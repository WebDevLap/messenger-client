import { IUser } from "@entities/User";

interface IUserAnswer {
  text: string;
  answeredId: string | null;
  user: IUser;
        // IUser: {id, nickname, avatar}
}

export interface IPost {
  id: string;
  createdAt: string;
  user: {
    id: string;
    nickname: string;
    avatar: string;
  };
  picture: string;
  text: string;
  tags: string;
  comments: {
    text: string;
    user: IUser;
    answeredComments: IUserAnswer[];
  }[];

  // quantity_likes: string;
  // quantity_views: string;
  // quantity_comments: string;
}
