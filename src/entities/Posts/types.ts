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
