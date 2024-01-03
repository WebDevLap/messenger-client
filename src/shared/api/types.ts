export interface IUser {
  id: string;
  name: string;
  surname: string;
  email: string;
  nickname: string;
  createdAt: string;
  avatar: string;
  bg_image: string;
  quantity_posts: string;
  quantity_followers: string;
  quantity_following: string;
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
  quantity_likes: string;
  quantity_views: string;
  quantity_comments: string;
  comments: {
    text: string;
    answeredComments: string[];
  };
}
