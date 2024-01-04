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

export interface IAddUser {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  nickname: string,
}
export interface ITokens {
  access: string;
  refresh: string;
}

export interface ILogin {
  nickname?: string;
  email?: string;
  password: string;
}