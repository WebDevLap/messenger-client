import { IUser } from "@entities/User";

interface IUserAnswer {
  text: string;
  answeredId: string | null;
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
  comments: {
    text: string;
    answeredComments: (IUser & IUserAnswer)[];
    //   id: string;
    // nickname: string;
    // avatar: string;
    // text: string
    //  answeredId: string | null
  }[];
  tags: string[];

  // quantity_likes: string;
  // quantity_views: string;
  // quantity_comments: string;
}

